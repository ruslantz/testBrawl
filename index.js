import {renderPicture} from './render.js';
import { createPictures } from './data.js';
import { QUANTITY } from './data.js';
import { USED } from './data.js';

const pictures = createPictures(QUANTITY);

document.getElementById("input").addEventListener("input", function() {
    let element = pictures.find(item => item.power === this.value);
    // if (USED.find(item => item.power === this.value))
    renderPicture(element);
    USED.push("fdfd");
})

// if (this.value ===)
