export const SITE_NAME = 'サイゼリヤ1000円ガチャ'
export const SITE_URL = 'https://saizeriya-1000yen.marusho.io'
export const DEFAULT_DESCRIPTION =
  'サイゼリヤのメニューから、設定した予算やカロリー以内の組み合わせをランダムに選べる無料ガチャです。'

export const getSiteUrl = (path = '/') => {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || SITE_URL).replace(
    /\/$/,
    '',
  )
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${baseUrl}${normalizedPath}`
}
