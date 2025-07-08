import { saveToken, getToken } from '../../src/utils/auth'

describe('auth', () => {
  beforeEach(() => {
    localStorage.clear() // 每個測試前清空 localStorage
  })

  it('初始時 token 為 null', () => {
    expect(getToken()).toBeNull() // passed
  })

  it('設定 token', () => {
    saveToken('abc123')
    expect(getToken()).toBe('abc123') // passed
  })

  it('初始時 token 為 null', () => {
    expect(getToken()).toBeNull() // passed
  })
})
