import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../../src/layouts/Navbar'
import { MemoryRouter } from 'react-router'
import { expect } from 'vitest'
// import { expect } from 'vitest'

describe('pages > TodoList 測試', () => {
  test('元件是否顯示正確', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('TodoList')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('外部網站1')).toBeInTheDocument()
  })

  test('當前路由是否套用樣式', () => {
    render(
      <MemoryRouter initialEntries={['/todoList']}>
        <Navbar />
      </MemoryRouter>
    )
    expect(screen.getByText('TodoList')).toHaveClass('active')
  })

  test('當前路由是否不套用樣式', () => {
    render(
      <MemoryRouter initialEntries={['/todoList']}>
        <Navbar />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).not.toHaveClass('active')
  })

  test('是否正確切換路由', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByText('Posts'))
    expect(screen.getByText('Posts')).toHaveClass('active')
  })

  test.skip('點擊 "外部網站1" 是否正確連結至外部網站(failed)', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByText('外部網站1'))
    expect(window.location.href).toBe('https://vitest.dev/')
    // jsdom 不會完全模擬瀏覽器所有功能(輕量、性能考量)
  })

  test('"外部網站1" 是否正確連結至外部網站(passed)', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const externalLink = screen.getByText('外部網站1')
    expect(externalLink).toHaveAttribute('href', 'https://vitest.dev/')
    expect(externalLink).toHaveAttribute('target', '_blank')
  })

  test.skip('點擊 "外部網站2" 是否正確連結至外部網站(failed)', () => {
    // Error: Not implemented: navigation (except hash changes)
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('外部網站2'))
    expect(window.location.href).toBe('https://vitest.dev/')
  })

  test.skip('點擊 "外部網站2" 是否正確連結至外部網站(passed)(未還原)', () => {
    Object.defineProperty(window, 'location', {
      value: { pathname: '/todoList' },
      writable: true,
    })

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('外部網站2'))
    expect(window.location.href).toBe('https://vitest.dev/')
  })

  test.skip('受影響的測試', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    console.log('受影響的 window.location', window.location)
  })

  test.only('點擊 "外部網站2" 是否正確連結至外部網站(passed)(有還原)', () => {
    const originalLocation = window.location
    Object.defineProperty(window, 'location', {
      value: { pathname: '/todoList' },
      writable: true,
    })

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('外部網站2'))
    expect(window.location.href).toBe('https://vitest.dev/')

    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
    })
  })

  test.only('沒受影響的測試', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    console.log('沒受影響的 window.location', window.location)
  })

  test('點擊 "內部網站" 是否正確連結至 "/posts" (passed)(有還原)', () => {
    const originalLocation = window.location
    Object.defineProperty(window, 'location', {
      value: { pathname: '/todoList' },
      writable: true,
    })

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByText('內部網站'))
    expect(window.location.pathname).toBe('/posts')

    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
    })
  })
})
