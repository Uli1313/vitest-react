import { generateId } from '../../src/utils/randomId'

describe('generateId', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(0.11335577)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('第一次執行 generateId', () => {
    const id = generateId()
    expect(id).toBe('42wq5x')
  })

  it('第二次執行 generateId', () => {
    const id = generateId()
    expect(id).toBe('42wq5x')
  })
})
