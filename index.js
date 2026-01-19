const container = document.querySelector("#container");
const changeGridSizeBtn = document.querySelector("#changeGridSizeBtn");

function generateGrid(number) {
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
      block.style.backgroundColor = "black";
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
    alert("Generating grid...");
    generateGrid(sizeNumber);
  } else {
    alert("Please give a positive number.");
  }
});
