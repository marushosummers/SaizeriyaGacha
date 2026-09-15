import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Main } from './main'

jest.mock('./spinner', () => ({ Spinner: () => null }))

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
