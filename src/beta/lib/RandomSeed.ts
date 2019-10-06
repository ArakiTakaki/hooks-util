export default (seed: number = Math.random()) => {
  return (Math.cos(43758.5453 * Math.sin(43758.5453 * seed) * seed) + 1) / 2;
};
