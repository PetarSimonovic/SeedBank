

function setDate() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  return {month: month, day: day, year: year}
}

module.exports = setDate;
