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

  it('メニューが空なら空配列を返す', () => {
    expect(doGacha([], 500)).toEqual([])
  })

  it('上限を超えるメニューしかなければ空配列を返す', () => {
    expect(doGacha([menu(501, 100)], 500)).toEqual([])
  })

  it('価格が0以下のメニューを通常抽選の候補にしない', () => {
    expect(doGacha([menu(0, 100), menu(-100, 100)], 500)).toEqual([])
  })

  it('上限と同額のメニューを選べる', () => {
    const exact = menu(500, 100)

    expect(doGacha([exact], 500)).toEqual([exact])
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

  it('必須カテゴリーの候補が存在しなければ空配列を返す', () => {
    expect(
      doGacha([menu(100, 100)], 500, 'price', {
        requiredCategories: ['dessert'],
      }),
    ).toEqual([])
  })

  it('必須カテゴリーの候補から上限内に収まる組み合わせを選ぶ', () => {
    const expensiveAlcohol = menu(400, 400, 'alcohol', 'expensive-alcohol')
    const affordableAlcohol = menu(200, 200, 'alcohol', 'affordable-alcohol')
    const dessert = menu(300, 300, 'dessert')

    expect(
      doGacha([expensiveAlcohol, affordableAlcohol, dessert], 500, 'price', {
        requiredCategories: ['alcohol', 'dessert'],
      }),
    ).toEqual([affordableAlcohol, dessert])
  })

  it('アルコール・デザート・ドリンクを同時に必須指定できる', () => {
    const alcohol = menu(100, 100, 'alcohol')
    const dessert = menu(100, 100, 'dessert')
    const drink = menu(200, 0, 'drink')

    expect(
      doGacha([alcohol, dessert, drink], 200, 'calorie', {
        requiredCategories: ['alcohol', 'dessert', 'drink'],
      }),
    ).toEqual([alcohol, dessert, drink])
  })

  it('重複メニュー不可なら同じ注文コードを複数回選ばない', () => {
    const result = doGacha([menu(100, 100)], 500, 'price', {
      preventDuplicates: true,
    })

    expect(result).toHaveLength(1)
  })

  it('重複を許可した場合は同じメニューを複数回選べる', () => {
    const repeatedMenu = menu(100, 100)

    expect(doGacha([repeatedMenu], 300)).toEqual([
      repeatedMenu,
      repeatedMenu,
      repeatedMenu,
    ])
  })

  it('別オブジェクトでも注文コードが同じなら重複とみなす', () => {
    const first = menu(100, 100, 'main', 'same-code')
    const second = menu(100, 100, 'dessert', 'same-code')

    expect(
      doGacha([first, second], 300, 'price', {
        preventDuplicates: true,
      }),
    ).toEqual([first])
  })

  it('ドリンクバーは重複メニューを許可しても1品だけ選ぶ', () => {
    const drink = menu(100, 100, 'drink')
    const result = doGacha([drink], 500)

    expect(result).toEqual([drink])
  })

  it('ドリンクバーを1品選んだ後も他カテゴリーは抽選を続ける', () => {
    const drink = menu(100, 100, 'drink')
    const main = menu(200, 200)
    const result = doGacha([drink, main], 500)

    expect(result.filter((item) => item.category === 'drink')).toEqual([drink])
    expect(result).toEqual([drink, main, main])
  })

  it('必須指定したドリンクバーに加えて別のドリンクを選ばない', () => {
    const requiredDrink = menu(100, 100, 'drink', 'required-drink')
    const anotherDrink = menu(100, 100, 'drink', 'another-drink')

    const result = doGacha([requiredDrink, anotherDrink], 500, 'price', {
      requiredCategories: ['drink'],
    })

    expect(result).toHaveLength(1)
    expect(result[0].category).toBe('drink')
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
