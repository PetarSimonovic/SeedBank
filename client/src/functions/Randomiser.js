
// accepts a range object and returns a random number
// useed to generate terrain and balloons
// eg {max: 1.3, min: 1}

export default function randomiser(range) {
  return Math.random() * (range.max - range.min) + range.min
}
