import crypto from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

import yaml from 'js-yaml'

type Menu = {
  name: string
  price: number
  calorie: number
  salt: number
  emoji: string
}

type Credentials = {
  apiKey: string
  apiSecret: string
  accessToken: string
  accessTokenSecret: string
}

const X_POST_ENDPOINT = 'https://api.x.com/2/tweets'
const BUDGET = 1000
const MAX_WEIGHTED_LENGTH = 280

const percentEncode = (value: string): string =>
  encodeURIComponent(value).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  )

const createOAuthHeader = ({
  method,
  url,
  credentials,
}: {
  method: string
  url: string
  credentials: Credentials
}): string => {
  const oauth = {
    oauth_consumer_key: credentials.apiKey,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: credentials.accessToken,
    oauth_version: '1.0',
  }

  const parameterString = Object.entries(oauth)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${percentEncode(key)}=${percentEncode(value)}`)
    .join('&')
  const signatureBase = [
    method,
    percentEncode(url),
    percentEncode(parameterString),
  ].join('&')
  const signingKey = `${percentEncode(credentials.apiSecret)}&${percentEncode(
    credentials.accessTokenSecret,
  )}`

  const oauthWithSignature = {
    ...oauth,
    oauth_signature: crypto
      .createHmac('sha1', signingKey)
      .update(signatureBase)
      .digest('base64'),
  }

  return `OAuth ${Object.entries(oauthWithSignature)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${percentEncode(key)}="${percentEncode(value)}"`)
    .join(', ')}`
}

const loadMenus = async (): Promise<Menu[]> => {
  const menuPath = fileURLToPath(new URL('../menu.yaml', import.meta.url))
  const menus = yaml.load(await readFile(menuPath, 'utf8'))

  if (!Array.isArray(menus) || menus.length === 0) {
    throw new Error('menu.yamlに有効なメニューがありません')
  }

  return menus as Menu[]
}

const doGacha = (menus: Menu[]): Menu[] => {
  const result: Menu[] = []
  let left = BUDGET

  while (left > 0) {
    const candidates = menus.filter((menu) => menu.price <= left)
    if (candidates.length === 0) break

    const selected = candidates[Math.floor(Math.random() * candidates.length)]
    result.push(selected)
    left -= selected.price
  }

  return result
}

const getWeightedLength = (text: string): number =>
  Array.from(text).reduce(
    (length, character) => length + (character.codePointAt(0) <= 0x7f ? 1 : 2),
    0,
  )

const getPostText = (menus: Menu[]): string => {
  const totalPrice = menus.reduce((total, menu) => total + menu.price, 0)
  const totalCalorie = menus.reduce((total, menu) => total + menu.calorie, 0)
  const totalSalt = menus.reduce((total, menu) => total + menu.salt, 0)
  const menuLines = menus.map((menu) => `${menu.emoji} ${menu.name}`).join('\n')

  return [
    'サイゼリヤ1000円ガチャを回したよ！',
    '',
    menuLines,
    '',
    `計 ${totalPrice}円 ${totalCalorie}kcal 塩分 ${Math.round(totalSalt * 10) / 10}g`,
    '',
    '#サイゼリヤガチャ',
  ].join('\n')
}

const createPostText = (menus: Menu[]): string => {
  for (let attempt = 0; attempt < 1000; attempt += 1) {
    const text = getPostText(doGacha(menus))
    if (getWeightedLength(text) <= MAX_WEIGHTED_LENGTH) return text
  }

  throw new Error('文字数上限内の投稿を生成できませんでした')
}

const getCredentials = (): Credentials => {
  const credentials = {
    apiKey: process.env.X_API_KEY,
    apiSecret: process.env.X_API_SECRET,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET,
  }
  const missing = Object.entries(credentials)
    .filter(([, value]) => !value)
    .map(([key]) => key)

  if (missing.length > 0) {
    throw new Error(`X APIの認証情報が不足しています: ${missing.join(', ')}`)
  }

  return credentials as Credentials
}

const main = async () => {
  const text = createPostText(await loadMenus())

  if (/https?:\/\/|www\./i.test(text)) {
    throw new Error('URLを含む投稿は課金額が高くなるため送信しません')
  }

  if (process.env.DRY_RUN === 'true') {
    process.stdout.write(
      `[dry-run] weighted length: ${getWeightedLength(text)}\n${text}\n`,
    )
    return
  }

  const credentials = getCredentials()
  const response = await fetch(X_POST_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: createOAuthHeader({
        method: 'POST',
        url: X_POST_ENDPOINT,
        credentials,
      }),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  const body = await response.json()

  if (!response.ok) {
    throw new Error(`X API error (${response.status}): ${JSON.stringify(body)}`)
  }

  process.stdout.write(
    `投稿しました: https://x.com/saizeriyagacha/status/${body.data.id}\n`,
  )
}

main().catch((error: unknown) => {
  process.stderr.write(`${String(error)}\n`)
  process.exitCode = 1
})
