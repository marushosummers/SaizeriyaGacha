import { Menu } from '../domain/Menu'

export type GachaUnit = 'price' | 'calorie'

export const doGacha = (
  menus: Menu[],
  limit: number,
  unit: GachaUnit = 'price',
): Menu[] => {
  const result: Menu[] = []
  let left = limit

  while (left <= limit) {
    const candidates = menus.filter(
      (menu) => menu[unit] > 0 && menu[unit] <= left,
    )
    if (!candidates.length) break
    const randNum = Math.floor(Math.random() * candidates.length)
    const food = candidates[randNum]
    left -= food[unit]
    result.push(food)
  }
  return result
}
