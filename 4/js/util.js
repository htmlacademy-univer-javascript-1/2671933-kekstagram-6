export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomArrayElement(array) {
  return array[getRandomInt(0, array.length)];
}
