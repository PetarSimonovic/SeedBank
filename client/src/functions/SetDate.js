

// creates a date object that contains day, month, year and stamp in an ISO format

export default function setDate() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const stamp = `${year}-${month}-${day}`
  return {year: year, month: month, day: day, stamp: stamp }
}
