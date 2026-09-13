import { Menu } from '../domain/Menu'
import { doGacha } from './doGatya'

const menu = (price: number, calorie: number): Menu => ({
  order_code: `${price}-${calorie}`,
  name_en: 'Food',
  name: 'テストメニュー',
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
})
