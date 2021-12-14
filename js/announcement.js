import {generateDataAnnouncements} from './data.js';
import {getWordCompletion} from './utils.js';

const dataAnnouncements = generateDataAnnouncements(10);

const cardTemplateFragment = document.querySelector('#card').content;
const cardTemplate = cardTemplateFragment.querySelector('.popup');

const ANNOUNCEMENT_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Гостиница',
};

function removeChildren(element) {
  while (element.children.length) {
    element.children[0].remove();
  }
}

function createFeauresList(featuresData, featuresList) {
  const fragment = document.createDocumentFragment();

  for (const feature of featuresData) {
    const featuresItem = featuresList.children[0].cloneNode(true);
    featuresItem.classList = `popup__feature popup__feature--${feature}`;
    fragment.appendChild(featuresItem);
  }

  removeChildren(featuresList);
  featuresList.appendChild(fragment);
}

function createPhotos(photosData, photosList) {
  const fragment = document.createDocumentFragment();

  for (const photo of photosData) {
    const photoItem = photosList.children[0].cloneNode(true);
    photoItem.src = photo;
    fragment.appendChild(photoItem);
  }

  photosList.children[0].remove();
  photosList.appendChild(fragment);
}

function createCard({
  author: {
    avatar,
  },
  offer: {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
  },
})
{
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__avatar').src = avatar;

  card.querySelector('.popup__title').textContent = title;

  card.querySelector('.popup__text--address').textContent = address;

  card.querySelector('.popup__text--price').childNodes[0].textContent = price;

  card.querySelector('.popup__type').textContent = ANNOUNCEMENT_TYPES[type];

  card.querySelector('.popup__text--capacity').textContent = `${rooms} ${getWordCompletion(rooms, ['комната', 'комнаты', 'комнат'])} для ${guests} ${getWordCompletion(guests, ['гость', 'гостя', 'гостей'])}`;

  card.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  if (features.length) {
    createFeauresList(features, card.querySelector('.popup__features'));
  } else {
    card.querySelector('.popup__features').remove();
  }

  if (description.length) {
    card.querySelector('.popup__description').textContent = description;
  } else {
    card.querySelector('.popup__description').remove();
  }

  if (photos.length) {
    createPhotos(photos, card.querySelector('.popup__photos'));
  } else {
    card.querySelector('.popup__photos').remove();
  }

  return card;
}

function getCardsNode() {
  return dataAnnouncements.map((item) => createCard(item));
}

export {getCardsNode};
