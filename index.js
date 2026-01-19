const container = document.querySelector("#container");
const changeGridSizeBtn = document.querySelector("#changeGridSizeBtn");
const resetGridBtn = document.querySelector("#resetGrid");
const toggleColorBtn = document.querySelector("#toggleColor");
import resetGrid from "./util/resetGrid.js";

let currentNumber = 16;
let isColorOn = false;

export function generateGrid(number) {
  let gridRow = "";
  for (let i = 0; i < number; i++) {
    gridRow += `<div class="etchSketchBlock"></div>`;
  }
  container.innerHTML = "";
  for (let i = 0; i < number; i++) {
    container.innerHTML += `<div class="column">${gridRow}</div>`;
  }

  const etchSketchBlocks = document.querySelectorAll(".etchSketchBlock");
  console.log(etchSketchBlocks);
  etchSketchBlocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      if (!isColorOn) {
        block.style.backgroundColor = "black";
      } else {
        block.style.backgroundColor = "#893409";
      }
    });
  });
}

generateGrid(16);

//toggle Grid size feature
changeGridSizeBtn.addEventListener("click", () => {
  const desiredSize = prompt("What size do you want? Max: 100x100");
  const sizeNumber = Number(desiredSize);
  if (sizeNumber > 100) {
    alert("Your number is too large.");
  } else if (sizeNumber > 0 && !isNaN(sizeNumber) && sizeNumber !== null) {
    currentNumber = sizeNumber;
    generateGrid(sizeNumber);
  } else {
    alert("Please give a positive number.");
  }
});

resetGridBtn.addEventListener("click", () => {
  console.log(currentNumber);
  resetGrid(currentNumber);
});

toggleColorBtn.addEventListener("click", () => {
  isColorOn = !isColorOn;
});
