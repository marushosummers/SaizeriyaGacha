export type Menu = {
  order_code: string | number
  name_en: string
  name: string
  category: MenuCategory
  price: number
  calorie: number
  salt: number
  emoji: string
}

export type MenuCategory =
  | 'salad'
  | 'soup'
  | 'appetizer'
  | 'doria'
  | 'gratin'
  | 'pizza'
  | 'pasta'
  | 'main'
  | 'rice'
  | 'bread'
  | 'dessert'
  | 'alcohol'
  | 'topping'
  | 'drink'
  | 'takeout'

export const MENU_CATEGORIES: MenuCategory[] = [
  'salad',
  'soup',
  'appetizer',
  'doria',
  'gratin',
  'pizza',
  'pasta',
  'main',
  'rice',
  'bread',
  'dessert',
  'alcohol',
  'topping',
  'drink',
  'takeout',
]
