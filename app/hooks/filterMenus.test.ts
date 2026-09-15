import { Menu } from '../domain/Menu'
import { filterMenus } from './filterMenus'

const menu = (category: Menu['category'], name_en: string): Menu => ({
  order_code: name_en,
  name_en,
  name: name_en,
  category,
  price: 100,
  calorie: 100,
  salt: 0,
  emoji: '🍽️',
})

const menus = [
  menu('pasta', 'Pasta'),
  menu('alcohol', 'Wine'),
  menu('takeout', 'Dressing'),
  menu('topping', 'Cheese'),
  menu('dessert', 'Pudding'),
  menu('drink', 'DrinkBar'),
]

const noFilters = {
  excludeAlcohol: false,
  excludeTakeout: false,
  excludeTopping: false,
  excludeDessert: false,
  excludeDrink: false,
}

describe('filterMenus', () => {
  it('カテゴリーがalcoholのメニューだけを除外する', () => {
    expect(filterMenus(menus, { ...noFilters, excludeAlcohol: true })).toEqual([
      menus[0],
      ...menus.slice(2),
    ])
  })

  it('カテゴリーがtakeoutのメニューだけを除外する', () => {
    expect(filterMenus(menus, { ...noFilters, excludeTakeout: true })).toEqual([
      menus[0],
      menus[1],
      ...menus.slice(3),
    ])
  })

  it('両方の除外条件を同時に適用する', () => {
    expect(
      filterMenus(menus, {
        ...noFilters,
        excludeAlcohol: true,
        excludeTakeout: true,
      }),
    ).toEqual([menus[0], ...menus.slice(3)])
  })

  it.each([
    ['topping', 'excludeTopping'],
    ['dessert', 'excludeDessert'],
    ['drink', 'excludeDrink'],
  ] as const)('%sカテゴリーを除外する', (category, filterName) => {
    expect(filterMenus(menus, { ...noFilters, [filterName]: true })).toEqual(
      menus.filter((item) => item.category !== category),
    )
  })
})
