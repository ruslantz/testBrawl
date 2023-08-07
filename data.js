import { getRandomElement } from "./util.js";
import {getRandomIntInclusive} from './util.js';


export const POWER = [
    "сила",
    "скорость",
    "гибкость",
    "выносливость",
    "смелость",
    "равновесие",
    "координация",
    "цель",
    "ум",
    "смекалка",
    "хитрость",
    "помощь",
    "техника",
    "упорство"
];

export const USED = [];
console.log(USED)

export const QUANTITY = POWER.length

const createPicture = (id) => {
    // Создает массив комментариев
    return {
        id,
        url: (id === 13) ? `./images/${id}.gif` : `./images/${id}.webp`,
        power: POWER[id-1]
    };
};

export const createPictures = (quantity) => Array.from({ length: quantity }, (_, pictureId) => createPicture(pictureId + 1));