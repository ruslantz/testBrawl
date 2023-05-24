

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = (id) => {
  const element = pictureTemplate.cloneNode(true);
  const number = id
  element.querySelector('.picture__img').src = `./images/${number+1}.png`;

  return element;
  };

const renderPicture = () => {
    const picturesFragment = document.createDocumentFragment();
    picturesFragment.append(createPicture);
    return picturesContainer.append(picturesFragment);
  };