const container = document.querySelector("#container");

let div = "";

//creates 16x16 grid of blocks
for (let i = 0; i < 16; i++) {
  div += `<span>Hi </span>`;
}
for (let i = 0; i < 16; i++) {
  container.innerHTML += `<div>${div}</div>`;
}
