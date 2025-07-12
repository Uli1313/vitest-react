import { vi } from 'vitest'
import { render } from '@testing-library/react'
import * as greetingUtils from '../logic/getGreeting'
import Home from './Home'

describe('mockReturnValue', () => {
  it('should show greeting', () => {
    vi.spyOn(greetingUtils, 'getGreeting').mockReturnValue('Good morning') // 回傳固定值
    const { getByText } = render(<Home />)
    expect(getByText('Good morning')).toBeInTheDocument()
    greetingUtils.getGreeting.mockRestore() // 復原模擬
  })
})

// describe('setSystemTime', () => {
//   beforeAll(() => {
//     vi.useFakeTimers()
//   })

//   afterAll(() => {
//     vi.useRealTimers()
//   })

//   it('displays Merry Christmas on Dec 25', () => {
//     vi.setSystemTime(new Date('2025-12-25T10:00:00'))
//     const { getByText } = render(<Home />)
//     getByText('Merry Christmas')
//   })

//   it('displays Good morning on normal day', () => {
//     vi.setSystemTime(new Date('2025-07-11T08:00:00'))
//     const { getByText } = render(<Home />)
//     getByText('Good morning')
//   })
// })
