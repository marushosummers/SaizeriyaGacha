import { Menu } from '../domain/Menu'
import { doGacha } from './doGatya'

const menu = (
  price: number,
  calorie: number,
  category: Menu['category'] = 'main',
  orderCode = `${price}-${calorie}-${category}`,
): Menu => ({
  order_code: orderCode,
  name_en: 'Food',
  name: 'テストメニュー',
  category,
  price,
  calorie,
  salt: 0,
  emoji: '🍽️',
})

describe('doGacha', () => {
  beforeEach(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('価格の合計を指定した上限以内に収める', () => {
    const result = doGacha([menu(300, 900), menu(200, 800)], 500)

    expect(result.map((item) => item.price)).toEqual([300, 200])
  })

  it('カロリーの合計を指定した上限以内に収める', () => {
    const result = doGacha([menu(900, 300), menu(800, 200)], 500, 'calorie')

    expect(result.map((item) => item.calorie)).toEqual([300, 200])
  })

  it('カロリーが0のメニューを除外して停止する', () => {
    expect(doGacha([menu(100, 0)], 500, 'calorie')).toEqual([])
  })

  it('指定した必須カテゴリーを上限内で必ず含める', () => {
    const main = menu(300, 300)
    const alcohol = menu(200, 200, 'alcohol')
    const dessert = menu(250, 250, 'dessert')

    const result = doGacha([main, alcohol, dessert], 500, 'price', {
      requiredCategories: ['alcohol', 'dessert'],
    })

    expect(result).toEqual(expect.arrayContaining([alcohol, dessert]))
    expect(
      result.reduce((sum, item) => sum + item.price, 0),
    ).toBeLessThanOrEqual(500)
  })

  it('必須カテゴリーの組み合わせが上限内に収まらなければ空配列を返す', () => {
    expect(
      doGacha(
        [menu(400, 400, 'alcohol'), menu(400, 400, 'dessert')],
        500,
        'price',
        { requiredCategories: ['alcohol', 'dessert'] },
      ),
    ).toEqual([])
  })

  it('重複メニュー不可なら同じ注文コードを複数回選ばない', () => {
    const result = doGacha([menu(100, 100)], 500, 'price', {
      preventDuplicates: true,
    })

    expect(result).toHaveLength(1)
  })

  it('ドリンクバーは重複メニューを許可しても1品だけ選ぶ', () => {
    const drink = menu(100, 100, 'drink')
    const result = doGacha([drink], 500)

    expect(result).toEqual([drink])
  })

  it('カロリー0のドリンクバーも必須条件なら含める', () => {
    const drink = menu(200, 0, 'drink')

    expect(
      doGacha([drink], 500, 'calorie', {
        requiredCategories: ['drink'],
      }),
    ).toEqual([drink])
  })
})
