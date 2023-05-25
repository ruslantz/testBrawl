import {renderPicture} from './render.js';
import { createPictures } from './data.js';
import { QUANTITY } from './data.js';

const pictures = createPictures(QUANTITY);

document.getElementById("input").addEventListener("input", function() {
    if (this.value === "сила") {
        renderPicture(pictures);
    }
    // if (this.value === "скорость") {
    //     renderPicture(number);
    // }
    // if (this.value === "выносливость") {
    //     document.getElementById("img3").classList.remove("hidden");
    // }
    // if (this.value === "гибкость") {
    //     document.getElementById("img4").classList.remove("hidden");
    // }
    // if (this.value === "смелость") {
    //     document.getElementById("img5").classList.remove("hidden");
    // }
    // if (this.value === "упорство") {
    //     document.getElementById("img6").classList.remove("hidden");
    // }
    // if (this.value === "мастер") {
    //     document.getElementById("main").classList.add("hidden");
    //     document.getElementById("main1").classList.remove("hidden");
    // }
})

