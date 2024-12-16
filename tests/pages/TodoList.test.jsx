import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../../src/pages/TodoList'

describe('pages > TodoList 測試', () => {
  it('元件是否顯示正確', () => {
    render(<TodoList />)
    expect(screen.getByText('Todo List')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('輸入代辦事項')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '加入' })).toBeInTheDocument()
  })

  it('輸入代辦事項並點擊加入按鈕，是否正確加入代辦事項', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('輸入代辦事項')
    const addButton = screen.getByRole('button', { name: '加入' })

    fireEvent.change(input, { target: { value: '寫 code' } })
    fireEvent.click(addButton)

    expect(screen.getByText('寫 code')).toBeInTheDocument()
  })

  it('加入代辦事項後，輸入框是否正確清空', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('輸入代辦事項')
    const addButton = screen.getByRole('button', { name: '加入' })

    fireEvent.change(input, { target: { value: '寫 code' } })
    fireEvent.click(addButton)

    expect(input.value).toBe('')
  })

  it('點擊刪除按鈕，是否正確刪除代辦事項', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('輸入代辦事項')
    const addButton = screen.getByRole('button', { name: '加入' })

    fireEvent.change(input, { target: { value: '寫 code' } })
    fireEvent.click(addButton)

    const deleteButton = screen.getByRole('button', { name: '刪除' })
    fireEvent.click(deleteButton)

    expect(screen.queryByText('寫 code')).not.toBeInTheDocument()
  })

  it('輸入空白字串並點擊加入按鈕，不會加進代辦清單中', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('輸入代辦事項')
    const addButton = screen.getByRole('button', { name: '加入' })

    fireEvent.change(input, { target: { value: '     ' } })
    fireEvent.click(addButton)

    const deleteButton = screen.queryByRole('button', { name: '刪除' })
    expect(deleteButton).not.toBeInTheDocument()
  })
})
