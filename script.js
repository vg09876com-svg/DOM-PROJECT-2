// script.js — Random Color Box

document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Generates a random color as a hex string, e.g. "#3f9a2c"
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Changes the box's background to a freshly generated random color
  function changeBoxColor() {
    colorBox.style.backgroundColor = getRandomColor();
  }

  changeColorBtn.addEventListener("click", changeBoxColor);
});