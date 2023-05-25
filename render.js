const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = (picture) => {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = picture.url;

  return element;
  };

export const renderPicture = (id) => {
    const picturesFragment = document.createDocumentFragment();
    picturesFragment.append(createPicture(id));
    return picturesContainer.append(picturesFragment);
  };

