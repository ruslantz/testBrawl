import { USED, POWER } from './data.js';
import { QUANTITY } from './data.js';
import { renderPicture, restoreDataFromLocalStorageHTML, picturesContainer } from './render.js';
import { createPictures, dailyExercises } from './data.js';
import { renderTask, taskContainer, restoreDataTaskFromLocalStorageHTML } from './renderTask.js';
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
    restoreDataTaskFromLocalStorageHTML()

};

let currentDayIndex = 0; // Индекс текущего дня
document.getElementById("input").addEventListener("input", function () {
    const inputValue = this.value.toLowerCase(); 
    let firstDayTask = dailyExercises[0];
    let element = pictures.find(item => item.power === inputValue);
    if (inputValue === "старт") {
        USED.length = 0;
        localStorage.clear();
        picturesContainer.innerHTML = '';
        taskContainer.innerHTML = '';
        renderTask(firstDayTask);

     } else {
        if (POWER.includes(inputValue)) {
            if (USED.includes(inputValue)) {
                console.log("Слово повторяется: ");
            } else {
                USED.push(inputValue);
                console.log("Слово найдено: ");
                renderPicture(element);
                taskContainer.innerHTML = '';
                currentDayIndex++;
                renderTask(dailyExercises[currentDayIndex]);
                // Сохраняем данные в локальное хранилище после каждого изменения
                saveDataToLocalStorage();
            }
        }
    }
});
