const container = document.querySelector("#container");
const changeGridSizeBtn = document.querySelector("#changeGridSizeBtn");

let div = "";

//creates 16x16 grid of blocks
for (let i = 0; i < 16; i++) {
  div += `<div class="etchSketchBlock"></div>`;
}
for (let i = 0; i < 16; i++) {
  container.innerHTML += `<div class="etchSketchBlockRow">${div}</div>`;
}

// on hover, change background color to black

const etchSketchBlocks = document.querySelectorAll(".etchSketchBlock");
console.log(etchSketchBlocks);
etchSketchBlocks.forEach((block) => {
  block.addEventListener("mouseover", () => {
    block.style.backgroundColor = "black";
  });
});

//add Reset Button
// make black path disentergrate after a while.

//toggle Grid size feature
changeGridSizeBtn.addEventListener("click", () => {
  const desiredSize = prompt("What size do you want? Max: 100x100");
});
