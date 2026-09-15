import { Menu } from '../domain/Menu'

export type MenuFilters = {
  excludeAlcohol: boolean
  excludeTakeout: boolean
  excludeTopping: boolean
  excludeDessert: boolean
  excludeDrink: boolean
}

export const filterMenus = (
  menus: Menu[],
  {
    excludeAlcohol,
    excludeTakeout,
    excludeTopping,
    excludeDessert,
    excludeDrink,
  }: MenuFilters,
): Menu[] =>
  menus.filter(
    (menu) =>
      (!excludeAlcohol || menu.category !== 'alcohol') &&
      (!excludeTakeout || menu.category !== 'takeout') &&
      (!excludeTopping || menu.category !== 'topping') &&
      (!excludeDessert || menu.category !== 'dessert') &&
      (!excludeDrink || menu.category !== 'drink'),
  )
