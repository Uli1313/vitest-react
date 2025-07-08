import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import TodoList from '../../src/pages/TodoList'
import { describe, vi } from 'vitest'

describe('pages > TodoList 測試', () => {
  beforeAll(() => {
    vi.setSystemTime(new Date(2025, 4, 11))
  })
  afterAll(() => {
    vi.useRealTimers()
  })

  describe('快照測試', () => {
    it('測試初始畫面', () => {
      const { container } = render(<TodoList />)
      expect(container).toMatchSnapshot()
    })

    it('測試新增代辦事項', async () => {
      const { container } = render(<TodoList />)

      const input = screen.getByPlaceholderText('輸入代辦事項')
      const addButton = screen.getByRole('button', { name: '新增' })
      await userEvent.type(input, '寫 code')
      await userEvent.click(addButton)

      expect(container).toMatchSnapshot()
    })
  })
})
