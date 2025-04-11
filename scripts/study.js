let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    } else {
        localStorage.setItem("name", myName);
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${myName}!`;
    }
}

myButton.onclick = () => {
    setUserName();
}