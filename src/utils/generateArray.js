export function generateArray(count) {
  if (typeof count !== 'number' || count < 0) {
    throw new Error('參數必須是非負數字')
  }
  return Array.from({ length: count }, (_, i) => i + 1)
}
