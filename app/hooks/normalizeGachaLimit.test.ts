import {
  MAX_GACHA_LIMIT,
  MIN_GACHA_LIMIT,
  normalizeGachaLimit,
} from './normalizeGachaLimit'

describe('normalizeGachaLimit', () => {
  it.each(['', '0', '99', 'invalid'])(
    '下限未満の入力を100に補正する: %s',
    (value) => {
      expect(normalizeGachaLimit(value)).toBe(MIN_GACHA_LIMIT)
    },
  )

  it('小数を切り捨てる', () => {
    expect(normalizeGachaLimit('999.9')).toBe(999)
  })

  it('上限を10000に補正する', () => {
    expect(normalizeGachaLimit('10001')).toBe(MAX_GACHA_LIMIT)
  })
})
