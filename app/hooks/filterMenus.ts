import { Menu } from '../domain/Menu'

type MenuFilters = {
  excludeAlcohol: boolean
  excludeTakeout: boolean
}

export const filterMenus = (
  menus: Menu[],
  { excludeAlcohol, excludeTakeout }: MenuFilters,
): Menu[] =>
  menus.filter(
    (menu) =>
      (!excludeAlcohol || menu.category !== 'alcohol') &&
      (!excludeTakeout || menu.category !== 'takeout'),
  )
