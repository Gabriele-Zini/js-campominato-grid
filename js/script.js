const container = document.querySelector(".container");
const select = document.getElementById("level");

select.addEventListener("change", handleSelect);

function createGrid(numMax) {
  for (let i = 1; i <= numMax; i++) {
    const cell = generateCell(numMax);
    cell.textContent = i;
    cell.addEventListener("click", handleClick);
    container.append(cell);
  }
}

// FUNZIONI
function generateCell(numMax) {
  const newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.style.width = `${100 / Math.sqrt(numMax)}%`;
  return newCell;
}

function handleClick() {
  const innerNumber = parseInt(this.textContent);
  this.classList.toggle("light-blue");
  console.log(innerNumber);
}

function handleSelect() {
  let value = select.value;
  container.innerHTML = "";
  if (value === "easy") {
    createGrid(100);
  } else if (value === "normal") {
    createGrid(81);
  } else if (value === "hard") {
    createGrid(49);
  }
}
