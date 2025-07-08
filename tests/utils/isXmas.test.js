import { isXmas } from '../../src/utils/isXmas'

describe('isXmas', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('12/25 應回傳 true', () => {
    vi.setSystemTime(new Date('2024-12-25'))
    expect(isXmas()).toBe(true)
  })

  it('07/01 應回傳 false', () => {
    vi.setSystemTime(new Date('2024-07-01'))
    expect(isXmas()).toBe(false)
  })
})
