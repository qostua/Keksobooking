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

const ANNOUNCEMENT_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Гостиница',
};
const ANNOUNCEMENT_CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];
const ANNOUNCEMENT_CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];
const ANNOUNCEMENT_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const ANNOUNCEMENT_DESCRIPTION = [
  'просторными',
  'светлыми',
  'удобными',
  'оснащенными всем необходимым',
];
const ANNOUNCEMENT_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function getRandomElementArray(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}
