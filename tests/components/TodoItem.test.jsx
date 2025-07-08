import { render, screen } from '@testing-library/react'
import TodoItem from '../../src/components/TodoItem'
import '@testing-library/jest-dom'
import { describe } from 'vitest'

describe('TodoItem Component', () => {
  const mockDeleteTodo = vi.fn()
  const mockTodo = {
    id: 1,
    text: 'Test Todo',
    createDate: new Date('2023-01-01T12:00:00'),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders the todo text', () => {
    render(<TodoItem {...mockTodo} deleteTodo={mockDeleteTodo} />)
    expect(screen.getByText('Test Todo')).toBeInTheDocument()
  })

  test('renders the formatted creation date', () => {
    render(<TodoItem {...mockTodo} deleteTodo={mockDeleteTodo} />)
    expect(screen.getByText('建立於 2023/1/1 下午12:00:00')).toBeInTheDocument()
  })
})
