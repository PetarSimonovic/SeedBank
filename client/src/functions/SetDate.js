

function setDate() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  return Number(`${year}${month}${day}`)
}

module.exports = setDate;
