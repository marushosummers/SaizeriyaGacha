import { render, waitFor } from '@testing-library/react'
import { Main } from './main'

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
