/** @jest-environment node */
import { dump } from 'js-yaml'
import { loadMenus, parseMenus } from './loadMenus'

const menu = {
  order_code: '001',
  name_en: 'Pasta',
  name: '検証用メニュー',
  price: 300,
  calorie: 450,
  salt: 1.2,
  emoji: '🍝',
}

describe('parseMenus', () => {
  it('配列順序・文字列と数値の注文番号・小数を維持する', () => {
    const menus = [menu, { ...menu, order_code: 2, salt: 0 }]
    expect(parseMenus(dump(menus))).toEqual(menus)
  })

  it.each(['', '[]', 'name: invalid'])(
    '空または配列でないデータを拒否する: %s',
    (source) => {
      expect(() => parseMenus(source)).toThrow('menu.yaml')
    },
  )

  it.each([
    { price: 0 },
    { price: -100 },
    { price: '300' },
    { calorie: -1 },
    { salt: Infinity },
    { name: null },
    { order_code: null },
  ])('不正なメニューを拒否する: %p', (invalid) => {
    expect(() => parseMenus(dump([{ ...menu, ...invalid }]))).toThrow('1件目')
  })

  it('壊れた YAML を拒否する', () => {
    expect(() => parseMenus('- name: [')).toThrow()
  })
})

it('リポジトリの menu.yaml を有効なメニューとして読み込める', async () => {
  await expect(loadMenus()).resolves.toEqual(expect.any(Array))
})
