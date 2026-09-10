import { readFile } from 'fs/promises'
import path from 'path'
import { load } from 'js-yaml'
import { Menu } from '../domain/Menu'

export const parseMenus = (source: string): Menu[] => {
  const menus: unknown = load(source)
  if (!Array.isArray(menus) || menus.length === 0) {
    throw new Error('menu.yaml: メニューを1件以上の配列で指定してください')
  }

  menus.forEach((menu, index) => {
    if (
      !menu ||
      typeof menu !== 'object' ||
      !(
        typeof menu.order_code === 'string' ||
        (typeof menu.order_code === 'number' &&
          Number.isFinite(menu.order_code))
      ) ||
      !['name_en', 'name', 'emoji'].every(
        (key) => typeof menu[key] === 'string',
      ) ||
      !['price', 'calorie', 'salt'].every(
        (key) => typeof menu[key] === 'number' && Number.isFinite(menu[key]),
      ) ||
      menu.price <= 0 ||
      menu.calorie < 0 ||
      menu.salt < 0
    ) {
      throw new Error(`menu.yaml: ${index + 1}件目のメニューの形式が不正です`)
    }
  })

  return menus as Menu[]
}

export const loadMenus = async (): Promise<Menu[]> => {
  const source = await readFile(path.join(process.cwd(), 'menu.yaml'), 'utf8')
  return parseMenus(source)
}
