import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../../src/layouts/Navbar'
import { MemoryRouter } from 'react-router'

describe('pages > TodoList 測試', () => {
  it('元件是否顯示正確', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('TodoList')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('外部網站')).toBeInTheDocument()
  })
})
