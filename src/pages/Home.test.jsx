import { render, screen, fireEvent } from '@testing-library/react'
import Home from './Home'

describe('點擊按鈕，應顯示 alert: Button A clicked!', () => {
  let alertMock

  beforeEach(() => {
    alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
  })
  afterEach(() => {
    alertMock.mockRestore()
  })

  it('(failed)使用 getByText 選取元素', () => {
    render(<Home />)
    // 選取到多個，無法點擊導致失敗
    const buttonA = screen.getByRole('button', { name: 'Click' })
    fireEvent.click(buttonA)
    expect(alertMock).toHaveBeenCalledWith('Button A clicked!')
  })

  it('(passed)使用 getAllByText 選取元素', () => {
    render(<Home />)
    // 選取第一個，但不太直觀，畫面上的順序跟 HTML 順序不一定一致
    const buttonA = screen.getAllByRole('button', { name: 'Click' })[0]
    fireEvent.click(buttonA)
    expect(alertMock).toHaveBeenCalledWith('Button A clicked!')
  })

  it('(passed)getAllByText 確認元素數量', () => {
    render(<Home />)
    const buttons = screen.getAllByRole('button', { name: 'Click' })
    expect(buttons).toHaveLength(5)
  })
})
