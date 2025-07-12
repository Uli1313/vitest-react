import { render, screen, fireEvent } from '@testing-library/react'
import CounterContainer from './CounterContainer'

describe('integration test', () => {
  test('初始顯示為 0，點 + 會遞增，點 - 會遞減', () => {
    render(<CounterContainer />)
    const plusButton = screen.getByText('+')
    const minusButton = screen.getByText('-')
    const counter = screen.getByText('0')

    // 初始狀態
    expect(counter).toBeInTheDocument()

    // 按 + 變 1
    fireEvent.click(plusButton)
    expect(screen.getByText('1')).toBeInTheDocument()

    // 再按 + 變 2
    fireEvent.click(plusButton)
    expect(screen.getByText('2')).toBeInTheDocument()

    // 按 - 變 1
    fireEvent.click(minusButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
