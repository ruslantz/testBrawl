document.getElementById("input").addEventListener("input", function() {
    if (this.value === "сила") {
        document.getElementById("img1").classList.remove("hidden");
    }
    if (this.value === "скорость") {
        document.getElementById("img2").classList.remove("hidden");
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

    
