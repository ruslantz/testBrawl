export const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const createPicture = (picture) => {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = picture.url;

  return element;
};

export const renderPicture = (id) => {
  const picturesFragment = document.createDocumentFragment();
  picturesFragment.append(createPicture(id));
  picturesContainer.append(picturesFragment);

  // Сохранение данных в локальное хранилище
  saveDataToLocalStorage();
};

// Функция для сохранения данных в локальное хранилище
function saveDataToLocalStorage() {
  const picturesHTML = picturesContainer.innerHTML;
  localStorage.setItem("savedPicturesHTML", picturesHTML);
}

// Функция для восстановления данных из локального хранилища
export const restoreDataFromLocalStorageHTML = () => {
  const picturesHTML = localStorage.getItem("savedPicturesHTML");
  if (picturesHTML) {
    picturesContainer.innerHTML = picturesHTML;
  }
}


