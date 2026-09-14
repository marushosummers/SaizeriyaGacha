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
]

describe('filterMenus', () => {
  it('カテゴリーがalcoholのメニューだけを除外する', () => {
    expect(
      filterMenus(menus, { excludeAlcohol: true, excludeTakeout: false }),
    ).toEqual([menus[0], menus[2]])
  })

  it('カテゴリーがtakeoutのメニューだけを除外する', () => {
    expect(
      filterMenus(menus, { excludeAlcohol: false, excludeTakeout: true }),
    ).toEqual([menus[0], menus[1]])
  })

  it('両方の除外条件を同時に適用する', () => {
    expect(
      filterMenus(menus, { excludeAlcohol: true, excludeTakeout: true }),
    ).toEqual([menus[0]])
  })
})
