

function setDate() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const stamp = date.getTime()
  return {year: year, month: month, day: day, stamp: stamp }
}

module.exports = setDate;
