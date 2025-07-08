import { describe, it, expect } from 'vitest'
import { generateArray } from '../../src/utils/generateArray'

describe('generateArray', () => {
  describe('測試', () => {
    it('應正確生成陣列', () => {
      expect(generateArray(0)).toEqual([])
      expect(generateArray(1)).toEqual([1])
      expect(generateArray(3)).toEqual([1, 2, 3])
      expect(generateArray(5)).toEqual([1, 2, 3, 4, 5])
    })
    it('應處理非數字輸入', () => {
      expect(() => generateArray('abc')).toThrow('參數必須是非負數字')
      expect(() => generateArray(null)).toThrow('參數必須是非負數字')
    })
  })

  describe('快照', () => {
    it('應該正確生成陣列', () => {
      expect(generateArray(0)).toMatchSnapshot()
      expect(generateArray(1)).toMatchSnapshot()
      expect(generateArray(3)).toMatchSnapshot()
      expect(generateArray(5)).toMatchSnapshot()
    })
    it('應該處理非數字輸入', () => {
      expect(() => generateArray('abc')).toThrowErrorMatchingSnapshot()
      expect(() => generateArray(null)).toThrowErrorMatchingSnapshot()
    })
  })
})
