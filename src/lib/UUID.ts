import Random from './RandomSeed'
export default (seed: number = Math.random()) => {
  return Math.floor(Random(seed) * (1679616 - 46656) + 46656).toString(36)
}
