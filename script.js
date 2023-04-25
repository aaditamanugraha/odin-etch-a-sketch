const gridContainer = document.getElementById("container");
const resetBtn = document.getElementById("reset-btn");

function createGrid(size) {
  gridContainer.innerHTML = "";

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");
    gridContainer.appendChild(square);
  }

  gridContainer.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });
  });
}

createGrid(16);

resetBtn.addEventListener("click", () => {
  let size = prompt("Masukan grid size (1-100).");
  if (size !== null && !isNaN(size) && size >= 1 && size <= 100) {
    createGrid(size);
  }
});
