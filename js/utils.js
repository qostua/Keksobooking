function getRandomPositiveInteger (val1, val2) {
  const lower = Math.ceil(Math.min(Math.abs(val1), Math.abs(val2)));
  const upper = Math.floor(Math.max(Math.abs(val1), Math.abs(val2)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
function getRandomPositiveFloat (val1, val2, digits = 1) {
  const lower = Math.min(Math.abs(val1), Math.abs(val2));
  const upper = Math.max(Math.abs(val1), Math.abs(val2));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
function getWordCompletion(number, wordCompletions) {
  const cases = [2, 0, 1, 1, 1, 2];
  return wordCompletions[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export {getRandomPositiveInteger, getRandomPositiveFloat, getWordCompletion};
