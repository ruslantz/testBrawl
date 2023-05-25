import {renderPicture} from './render.js';
import { power } from './data.js';


document.getElementById("input").addEventListener("input", function() {
    const picture = Array.from({ length: getRandomIntInclusive(1, COMMENTS_COUNT)}, (_, commentId) => createComment(commentId + 1));;
    if (this.value === "сила") {
        renderPicture(number);
    }
    if (this.value === "скорость") {
        renderPicture(number);
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

