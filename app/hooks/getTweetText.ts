import { Menu } from '../domain/Menu'
import { getSummary } from './getSummary'
import { GachaUnit } from './doGatya'

export const getTweetText = (
  result: Menu[],
  limit = 1000,
  unit: GachaUnit = 'price',
): string => {
  const menus = result.reduce(
    (txt, item) => txt + item.emoji + ' ' + item.name + '\n',
    '',
  )
  const [totalPrice, totalCalorie, totalSalt] = getSummary(result)
  const summary =
    '計 ' +
    totalPrice +
    '円 ' +
    totalCalorie +
    'kcal 塩分 ' +
    Math.round(totalSalt * 10) / 10 +
    'g'
  const hashtag = '#サイゼリヤガチャ'
  return (
    `サイゼリヤ${limit}${unit === 'price' ? '円' : 'kcal'}ガチャを回したよ！\n\n` +
    menus +
    '\n' +
    summary +
    '\n\n' +
    hashtag
  )
}
