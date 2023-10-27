const container = document.querySelector(".container");
const select = document.getElementById("level");
const playBtn = document.getElementById("play-btn");

select.addEventListener("change", handleSelect);
playBtn.addEventListener("click", handlePlayBtn);

// FUNZIONI

// funzione per creare la griglia
function createGrid(numMax) {
  for (let i = 1; i <= numMax; i++) {
    const cell = generateCell(numMax);
    cell.textContent = i;
    container.append(cell);
  }
}

// funzione per creare una singola cella
function generateCell(numMax) {
  const newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.style.width = `${100 / Math.sqrt(numMax)}%`;
  newCell.addEventListener("click", handleClick);
  return newCell;
}

// funzione per gestire il click sulla singola cella
function handleClick() {
  const innerNumber = parseInt(this.textContent);
  this.classList.toggle("light-blue");
  console.log(innerNumber);
}

// funzione per gestire il select
function handleSelect() {
  let value = select.value;
  container.innerHTML = "";
  if (value === "easy") {
    createGrid(100);
    container.classList.add("d-hidden");
  } else if (value === "normal") {
    createGrid(81);
    container.classList.add("d-hidden");
  } else if (value === "hard") {
    createGrid(49);
    container.classList.add("d-hidden");
  }
}

// funzione per gestire il tasto play
function handlePlayBtn() {
  container.classList.remove("d-hidden");
}
