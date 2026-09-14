export const MIN_GACHA_LIMIT = 100
export const MAX_GACHA_LIMIT = 10000

export const normalizeGachaLimit = (value: string): number => {
  const parsedValue = Number(value)
  if (!Number.isFinite(parsedValue)) return MIN_GACHA_LIMIT
  return Math.min(
    MAX_GACHA_LIMIT,
    Math.max(MIN_GACHA_LIMIT, Math.trunc(parsedValue)),
  )
}
