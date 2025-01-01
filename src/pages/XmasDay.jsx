function XmasDay() {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  const isChristmas = month === 12 && day === 25

  return (
    <div className="xmas_day_wrapper">
      <h1>Xmas Day</h1>
      <p>現在日期 : {today.toLocaleDateString()}</p>
      <p>{isChristmas ? '今天是聖誕節' : '今天不是聖誕節'}</p>
    </div>
  )
}

export default XmasDay
