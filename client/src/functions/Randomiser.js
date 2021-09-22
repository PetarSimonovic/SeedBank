
// accepts a range object and returns a random number
// useed to generate terrain and balloons

export default function randomiser(range) {
  return Math.random() * (range.max - range.min) + range.min
}
