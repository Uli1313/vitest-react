export function getGreeting() {
  const today = new Date()

  // 新增需求
  // const isHoliday = today.getMonth() === 11 && today.getDate() === 25 // 12/25
  // if (isHoliday) return 'Merry Christmas'

  const hour = today.getHours()
  return hour < 12 ? 'Good morning' : 'Good evening'
}
