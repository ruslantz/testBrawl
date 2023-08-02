import { USED, POWER } from './data.js';
import { QUANTITY } from './data.js';
import { renderPicture, restoreDataFromLocalStorageHTML } from './render.js';
import { createPictures } from './data.js';

// Функция для сохранения данных в локальное хранилище
function saveDataToLocalStorage() {
    localStorage.setItem("usedWords", JSON.stringify(USED));
}

// Функция для восстановления данных из локального хранилища
function restoreDataFromLocalStorage() {
    const usedWordsJSON = localStorage.getItem("usedWords");
    if (usedWordsJSON) {
        USED.push(...JSON.parse(usedWordsJSON));
    }
}

const pictures = createPictures(QUANTITY);

// Восстанавливаем данные из локального хранилища при загрузке страницы
window.onload = function () {
    restoreDataFromLocalStorage();
    restoreDataFromLocalStorageHTML();
};

document.getElementById("input").addEventListener("input", function () {
    let element = pictures.find(item => item.power === this.value);
    if (POWER.includes(this.value)) {
        if (USED.includes(this.value)) {
            console.log("Слово повторяется: ");
        } else {
            USED.push(this.value);
            console.log("Слово найдено: ");
            renderPicture(element);
            // Сохраняем данные в локальное хранилище после каждого изменения
            saveDataToLocalStorage();
        }
    }
});
