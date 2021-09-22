

export default function randomiser(range) {
  return Math.random() * (range.max - range.min) + range.min
}
