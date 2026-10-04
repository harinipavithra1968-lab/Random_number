import "./style.css";

const number = document.getElementById("number");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    number.textContent = randomNumber;
});