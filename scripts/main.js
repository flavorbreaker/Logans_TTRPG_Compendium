const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/lancer-rpg-artwork.jpg") {
        myImage.setAttribute("src", "images/lancer_1200x675.jpg");
    } else {
        myImage.setAttribute("src", "images/lancer-rpg-artwork.jpg");
    }
}