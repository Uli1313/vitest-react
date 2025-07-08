export function isXmas() {
  const today = new Date()
  console.log(today)
  return today.getMonth() === 11 && today.getDate() === 25
}
