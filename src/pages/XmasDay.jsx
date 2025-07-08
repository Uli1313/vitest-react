function XmasDay() {
  const today = new Date()
  const thisYear = today.getFullYear()
  const christmas = new Date(thisYear, 11, 25)
  const diffTime = christmas.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  let message = ''

  if (diffDays > 0) {
    message = `離聖誕節還有 ${diffDays} 天`
  } else if (diffDays === 0) {
    message = '今天是聖誕節'
  } else {
    message = '今年聖誕節過了'
  }

  return (
    <div className="xmas_day_wrapper">
      <h1>Xmas Day</h1>
      <p>{message}</p>
    </div>
  )
}

export default XmasDay
