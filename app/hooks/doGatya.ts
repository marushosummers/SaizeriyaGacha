import { Menu, MenuCategory } from '../domain/Menu'

export type GachaUnit = 'price' | 'calorie'

export type GachaOptions = {
  requiredCategories?: MenuCategory[]
  preventDuplicates?: boolean
}

const menuId = (menu: Menu) => String(menu.order_code)

const includesDrink = (menus: Menu[]) =>
  menus.some((menu) => menu.category === 'drink')

const canAddMenu = (menu: Menu, result: Menu[], preventDuplicates: boolean) =>
  (!preventDuplicates ||
    !result.some((item) => menuId(item) === menuId(menu))) &&
  (menu.category !== 'drink' || !includesDrink(result))

const findRequiredMenus = (
  menus: Menu[],
  categories: MenuCategory[],
  limit: number,
  unit: GachaUnit,
  preventDuplicates: boolean,
): Menu[] | undefined => {
  const combinations = categories.reduce<Menu[][]>(
    (results, category) =>
      results.flatMap((result) =>
        menus
          .filter(
            (menu) =>
              menu.category === category &&
              menu[unit] >= 0 &&
              canAddMenu(menu, result, preventDuplicates),
          )
          .map((menu) => [...result, menu]),
      ),
    [[]],
  )
  const viableCombinations = combinations.filter(
    (combination) =>
      combination.reduce((sum, menu) => sum + menu[unit], 0) <= limit,
  )

  if (!viableCombinations.length) return undefined
  return viableCombinations[
    Math.floor(Math.random() * viableCombinations.length)
  ]
}

export const doGacha = (
  menus: Menu[],
  limit: number,
  unit: GachaUnit = 'price',
  { requiredCategories = [], preventDuplicates = false }: GachaOptions = {},
): Menu[] => {
  const result = findRequiredMenus(
    menus,
    requiredCategories,
    limit,
    unit,
    preventDuplicates,
  )
  if (!result) return []

  let left =
    limit - result.reduce((sum, requiredMenu) => sum + requiredMenu[unit], 0)

  while (left > 0) {
    const candidates = menus.filter(
      (menu) =>
        menu[unit] > 0 &&
        menu[unit] <= left &&
        canAddMenu(menu, result, preventDuplicates),
    )
    if (!candidates.length) break
    const randNum = Math.floor(Math.random() * candidates.length)
    const food = candidates[randNum]
    left -= food[unit]
    result.push(food)
  }
  return result
}
