import {getRandomIntInclusive} from './util.js';
import {getRandomElement} from './util.js';


const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = (number) => {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = `./images/${getRandomIntInclusive(1, number - 1)}.png`;

  return element;
  };

export const renderPicture = (id) => {
    const picturesFragment = document.createDocumentFragment();
    picturesFragment.append(createPicture(id));
    return picturesContainer.append(picturesFragment);
  };

