import { USED, POWER } from './data.js';


document.getElementById("input").addEventListener("input", function () {
    if (POWER.includes(this.value)) {
        if (USED.includes(this.value)) {
            console.log("Слово повторяется: ");
        } else {
            USED.push(this.value);
            console.log("Слово найдено: ");
        }
    }
}
)
