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

const renderPicture = (id) => {
    const picturesFragment = document.createDocumentFragment();
    picturesFragment.append(createPicture(id));
    return picturesContainer.append(picturesFragment);
  };


document.getElementById("input").addEventListener("input", function() {
    if (this.value === "сила") {
        renderPicture(0);
    }
    if (this.value === "скорость") {
        renderPicture();
    }
    if (this.value === "выносливость") {
        document.getElementById("img3").classList.remove("hidden");
    }
    if (this.value === "гибкость") {
        document.getElementById("img4").classList.remove("hidden");
    }
    if (this.value === "смелость") {
        document.getElementById("img5").classList.remove("hidden");
    }
    if (this.value === "упорство") {
        document.getElementById("img6").classList.remove("hidden");
    }
    if (this.value === "мастер") {
        document.getElementById("main").classList.add("hidden");
        document.getElementById("main1").classList.remove("hidden");
    }
})

