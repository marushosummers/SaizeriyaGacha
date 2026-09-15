import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Menu } from '../domain/Menu'
import { Main } from './main'

jest.mock('./spinner', () => ({ Spinner: () => null }))
jest.mock('../hooks/sleep', () => ({
  __esModule: true,
  default: () => Promise.resolve(),
}))

const menu = (category: Menu['category'], name: string): Menu => ({
  order_code: `code-${name}`,
  name_en: name,
  name,
  category,
  price: 100,
  calorie: 100,
  salt: 0,
  emoji: '🍽️',
})

const conditionLabels = [
  'アルコール類を除く',
  'テイクアウトを除く',
  'トッピングを除く',
  'デザートを除く',
  'ドリンクバーを除く',
  '重複メニューは除く',
  'アルコール類を必ず含める',
  'デザートを必ず含める',
  'ドリンクバーを必ず含める',
]

const mockViewport = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}

const getAdSlots = () =>
  Array.from(document.querySelectorAll('ins.adsbygoogle')).map((ad) =>
    ad.getAttribute('data-ad-slot'),
  )

describe('Mainの広告配置', () => {
  beforeEach(() => {
    window.adsbygoogle = []
  })

  it('スマホ幅では上部広告と下部広告だけを初期化する', async () => {
    mockViewport(false)
    render(<Main menus={[]} />)

    await waitFor(() => {
      expect(getAdSlots()).toEqual(['1694695821', '7072512565'])
      expect(window.adsbygoogle).toHaveLength(2)
    })
  })

  it('PC幅では左右広告と下部広告だけを初期化する', async () => {
    mockViewport(true)
    render(<Main menus={[]} />)

    await waitFor(() => {
      expect(getAdSlots()).toEqual(['7849040636', '7072512565', '7849040636'])
      expect(window.adsbygoogle).toHaveLength(3)
    })
  })
})

describe('Mainの条件フィルター', () => {
  beforeEach(() => {
    mockViewport(false)
    window.adsbygoogle = []
    window.scrollTo = jest.fn()
    jest.spyOn(Math, 'random').mockReturnValue(0)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('ガチャボタンの下に条件フィルターを表示する', () => {
    render(<Main menus={[]} />)

    const button = screen.getByRole('button', { name: 'ガチャを回す' })
    const accordion = screen.getByRole('button', { name: '条件フィルター' })

    expect(
      button.compareDocumentPosition(accordion) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(accordion.getAttribute('aria-expanded')).toBe('false')

    fireEvent.click(accordion)

    expect(accordion.getAttribute('aria-expanded')).toBe('true')
  })

  it('9種類の条件を表示し、閉じている間は操作できない', () => {
    render(<Main menus={[]} />)
    const accordion = screen.getByRole('button', { name: '条件フィルター' })
    const checkboxes = conditionLabels.map(
      (label) => screen.getByLabelText(label) as HTMLInputElement,
    )

    expect(checkboxes).toHaveLength(9)
    expect(checkboxes.every((checkbox) => checkbox.disabled)).toBe(true)

    fireEvent.click(accordion)
    expect(checkboxes.every((checkbox) => !checkbox.disabled)).toBe(true)

    fireEvent.click(accordion)
    expect(checkboxes.every((checkbox) => checkbox.disabled)).toBe(true)
  })

  it.each([
    ['アルコール類を除く', 'アルコール類を必ず含める'],
    ['デザートを除く', 'デザートを必ず含める'],
    ['ドリンクバーを除く', 'ドリンクバーを必ず含める'],
  ])('%sと%sは後から選んだ条件だけを有効にする', (exclude, require) => {
    render(<Main menus={[]} />)
    fireEvent.click(screen.getByRole('button', { name: '条件フィルター' }))
    const excludeCheckbox = screen.getByLabelText(exclude) as HTMLInputElement
    const requireCheckbox = screen.getByLabelText(require) as HTMLInputElement

    fireEvent.click(excludeCheckbox)
    expect(excludeCheckbox.checked).toBe(true)

    fireEvent.click(requireCheckbox)
    expect(requireCheckbox.checked).toBe(true)
    expect(excludeCheckbox.checked).toBe(false)

    fireEvent.click(excludeCheckbox)
    expect(excludeCheckbox.checked).toBe(true)
    expect(requireCheckbox.checked).toBe(false)
  })

  it.each(['テイクアウトを除く', 'トッピングを除く', '重複メニューは除く'])(
    '%sは単独でオン・オフを切り替えられる',
    (label) => {
      render(<Main menus={[]} />)
      fireEvent.click(screen.getByRole('button', { name: '条件フィルター' }))
      const checkbox = screen.getByLabelText(label) as HTMLInputElement

      fireEvent.click(checkbox)
      expect(checkbox.checked).toBe(true)

      fireEvent.click(checkbox)
      expect(checkbox.checked).toBe(false)
    },
  )

  it.each([
    ['alcohol', 'アルコール類を除く'],
    ['takeout', 'テイクアウトを除く'],
    ['topping', 'トッピングを除く'],
    ['dessert', 'デザートを除く'],
    ['drink', 'ドリンクバーを除く'],
  ] as const)('%sの除外条件をガチャ結果へ反映する', async (category, label) => {
    const excludedMenu = menu(category, `除外対象-${category}`)
    const remainingMenu = menu('main', `残すメニュー-${category}`)
    render(<Main menus={[excludedMenu, remainingMenu]} />)

    fireEvent.click(screen.getByRole('button', { name: '条件フィルター' }))
    fireEvent.click(screen.getByLabelText(label))
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを回す' }))

    expect(
      (await screen.findAllByText(remainingMenu.name)).length,
    ).toBeGreaterThan(0)
    expect(screen.queryByText(excludedMenu.name)).toBeNull()
  })

  it.each([
    ['alcohol', 'アルコール類を必ず含める'],
    ['dessert', 'デザートを必ず含める'],
    ['drink', 'ドリンクバーを必ず含める'],
  ] as const)('%sの必須条件をガチャ結果へ反映する', async (category, label) => {
    const ordinaryMenu = menu('main', `通常メニュー-${category}`)
    const requiredMenu = menu(category, `必須メニュー-${category}`)
    render(<Main menus={[ordinaryMenu, requiredMenu]} />)

    fireEvent.click(screen.getByRole('button', { name: '条件フィルター' }))
    fireEvent.click(screen.getByLabelText(label))
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを回す' }))

    expect(await screen.findByText(requiredMenu.name)).toBeDefined()
  })

  it('重複メニューを除く条件をガチャ結果へ反映する', async () => {
    const onlyMenu = menu('main', '重複しないメニュー')
    render(<Main menus={[onlyMenu]} />)

    fireEvent.click(screen.getByRole('button', { name: '条件フィルター' }))
    fireEvent.click(screen.getByLabelText('重複メニューは除く'))
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを回す' }))

    expect(await screen.findAllByText(onlyMenu.name)).toHaveLength(1)
  })

  it('3種類の必須条件と重複除外を同時にガチャ結果へ反映する', async () => {
    const ordinaryMenu = menu('main', '通常メニュー')
    const alcohol = menu('alcohol', '必須アルコール')
    const dessert = menu('dessert', '必須デザート')
    const drink = menu('drink', '必須ドリンクバー')
    render(<Main menus={[ordinaryMenu, alcohol, dessert, drink]} />)

    fireEvent.click(screen.getByRole('button', { name: '条件フィルター' }))
    fireEvent.click(screen.getByLabelText('重複メニューは除く'))
    fireEvent.click(screen.getByLabelText('アルコール類を必ず含める'))
    fireEvent.click(screen.getByLabelText('デザートを必ず含める'))
    fireEvent.click(screen.getByLabelText('ドリンクバーを必ず含める'))
    fireEvent.click(screen.getByRole('button', { name: 'ガチャを回す' }))

    expect(await screen.findAllByText(alcohol.name)).toHaveLength(1)
    expect(screen.getAllByText(dessert.name)).toHaveLength(1)
    expect(screen.getAllByText(drink.name)).toHaveLength(1)
    expect(screen.getAllByText(ordinaryMenu.name)).toHaveLength(1)
  })

  it('開いた状態でガチャを回すと条件フィルターを閉じる', async () => {
    render(<Main menus={[]} />)
    const accordion = screen.getByRole('button', { name: '条件フィルター' })

    fireEvent.click(accordion)
    expect(accordion.getAttribute('aria-expanded')).toBe('true')

    fireEvent.click(screen.getByRole('button', { name: 'ガチャを回す' }))

    await waitFor(() => {
      expect(accordion.getAttribute('aria-expanded')).toBe('false')
    })
  })
})
