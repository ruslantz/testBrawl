import { getRandomElement } from "./util.js";
import {getRandomIntInclusive} from './util.js';


const POWER = [
    "сила",
    "скорость",
    "гибкость",
    "выносливость",
    "смелость",
    "упорство"
];

export const QUANTITY = POWER.length

const createPicture = (id) => {
    // Создает массив комментариев
    return {
        id,
        url: `./images/${id}.png`,
        power: POWER[id-1]
    };
};

export const createPictures = (quantity) => Array.from({ length: quantity }, (_, pictureId) => createPicture(pictureId + 1));