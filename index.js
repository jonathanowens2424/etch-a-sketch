const container = document.querySelector("#container");

let div = "";

//creates 16x16 grid of blocks
for (let i = 0; i < 16; i++) {
  div += `<div class="etchSketchBlock"></div>`;
}
for (let i = 0; i < 16; i++) {
  container.innerHTML += `<div class="etchSketchBlockRow">${div}</div>`;
}
