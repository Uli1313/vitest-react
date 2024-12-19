import { render, screen, fireEvent, prettyDOM } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../../src/layouts/Navbar'
import { MemoryRouter } from 'react-router'
import { afterEach, beforeEach, describe } from 'vitest'

describe('pages > TodoList 測試', () => {
  const renderCompWithRouter = (props = {}) => {
    const renderResult = render(
      <MemoryRouter {...props}>
        <Navbar />
      </MemoryRouter>
    )
    return renderResult
  }

  const props = {
    initialEntries: ['/todoList'],
  }

  test('元件是否顯示正確', () => {
    const { container } = renderCompWithRouter()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('TodoList')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('外部網站1')).toBeInTheDocument()
  })

  test('當前路由是否套用樣式', () => {
    renderCompWithRouter(props)
    expect(screen.getByText('TodoList')).toHaveClass('active')
  })

  test('當前路由是否不套用樣式', () => {
    renderCompWithRouter(props)
    expect(screen.getByText('Home')).not.toHaveClass('active')
  })

  test('是否正確切換路由', () => {
    const newProps = { ...props, initialEntries: ['/'] }
    renderCompWithRouter(newProps)
    fireEvent.click(screen.getByText('Posts'))
    expect(screen.getByText('Posts')).toHaveClass('active')
  })

  test('"外部網站1" 是否正確連結至外部網站', () => {
    renderCompWithRouter()
    const externalLink = screen.getByText('外部網站1')
    expect(externalLink).toHaveAttribute('href', 'https://vitest.dev/')
    expect(externalLink).toHaveAttribute('target', '_blank')
  })

  test.skip('點擊 "外部網站2" 是否正確連結至外部網站(failed)', () => {
    // Error: Not implemented: navigation (except hash changes)
    // jsdom 不會完全模擬瀏覽器所有功能(輕量、性能考量)
    renderCompWithRouter()
    fireEvent.click(screen.getByText('外部網站2'))
    expect(window.location.href).toBe('https://vitest.dev/')
  })

  describe('window.location', () => {
    const originalLocation = window.location

    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        value: { pathname: '/todoList' },
        writable: true,
      })
    })
    afterEach(() => {
      Object.defineProperty(window, 'location', {
        value: originalLocation,
        writable: true,
      })
    })

    test('點擊 "外部網站2" 是否正確連結至外部網站', () => {
      renderCompWithRouter()
      fireEvent.click(screen.getByText('外部網站2'))
      expect(window.location.href).toBe('https://vitest.dev/')
    })

    test('點擊 "內部網站" 是否正確連結至 "/posts"', () => {
      renderCompWithRouter()
      fireEvent.click(screen.getByText('內部網站'))
      expect(window.location.pathname).toBe('/posts')
    })
  })
})
