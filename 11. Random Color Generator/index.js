const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorcontainerEl = document.createElement("div");
  colorcontainerEl.classList.add("color-container");
  containerEl.appendChild(colorcontainerEl);
}

const colorcontainerEls = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
  colorcontainerEls.forEach((colorcontainerEl) => {
    const newColorCode = randomColor();
    colorcontainerEl.style.backgroundColor = "#" + newColorCode;
    colorcontainerEl.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const char = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * char.length);
    colorCode += char.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
