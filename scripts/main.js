const myImage = document.querySelector("img");
const imageAttr = document.querySelector(".hero-image-attribution");

const heroImageSources = ["images/lancer/lancer_hero_1.jpg", "images/mythic_bastionland/mb_hero_1.png","images/lancer/lancer_hero_2.jpg"]

let i = 0;

//changes the image after 2 seconds
const changeImage = () => {
    myImage.src = heroImageSources[i];
    if (i == heroImageSources.length - 1){
        i = 0;
    }
    else {i++};

    if (myImage.src.includes("lancer")) {
        imageAttr.textContent = "Lancer";
    }
    else {
        imageAttr.textContent = "Mythic Bastionland";
    }
}

setInterval(changeImage, 2000);