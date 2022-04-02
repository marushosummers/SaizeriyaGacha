import { Menu } from '../domain/Menu'

export const doGacha = (menus: Menu[], budget: number): Menu[] => {
  const result: Menu[] = []
  let left = budget

  while (left <= budget) {
    const candidates = menus.filter((menu) => menu.price <= left)
    if (!candidates.length) break
    const randNum = Math.floor(Math.random() * candidates.length)
    const food = candidates[randNum]
    left -= food.price
    result.push(food)
  }
  return result
}
