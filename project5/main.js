window.onload = () => {
  let oneSpan = document.getElementsByClassName("clock");
  let dateSpan = document.getElementsByClassName("date");
  let seasonSpan = document.getElementsByClassName("season");


  setInterval(() => {
    let date = new Date();
  oneSpan[0].innerHTML = date.toLocaleTimeString();
  let day = date.getDate();
  let monthNumber = date.getMonth() + 1;
  let year = date.getFullYear();
  dateSpan[0].innerHTML = day + "/" + monthNumber + "/" + year;
  let month = date.getMonth();
  // let season = "";
 
  // if (month >= 2 && month <= 4) season = "Spring";
  // else if (month >= 5 && month <= 7) season = "Summer";
  // else if (month >= 8 && month <= 10) season = "Fall";
  // else season = "Winter";
  // seasonSpan[0].innerHTML = season;

  }, 1000);
};

const leaves = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 8, 8, 5, 2, 2, 2, 6, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 6, 9, 5, 5, 5, 8, 5, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 8, 8, 5, 8, 5, 5, 5, 2, 5, 5, 2, 5, 8, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 8, 8, 8, 8, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 6, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 6, 6, 9, 8, 8, 8, 5, 5, 5, 5, 2, 2, 2, 5, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 9, 8, 8, 8, 5, 5, 8, 8, 8, 5, 5, 8, 5, 2, 5, 5, 8, 6, 0, 0, 0],
  [0, 0, 6, 9, 8, 8, 8, 5, 5, 5, 2, 2, 8, 8, 8, 5, 5, 5, 2, 2, 5, 6, 0, 0, 0],
  [0, 0, 6, 9, 8, 8, 5, 8, 5, 5, 5, 5, 5, 2, 2, 5, 5, 5, 5, 5, 5, 5, 6, 0, 0],
  [0, 6, 9, 6, 8, 8, 9, 8, 8, 5, 8, 5, 5, 2, 2, 2, 5, 8, 5, 5, 8, 6, 0, 0, 0],
  [0, 6, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 5, 5, 2, 5, 2, 8, 8, 8, 5, 8, 6, 0, 0],
  [0, 6, 6, 9, 9, 6, 8, 8, 9, 9, 5, 9, 8, 8, 5, 5, 5, 8, 6, 8, 8, 9, 8, 6, 0],
  [0, 0, 6, 6, 6, 9, 8, 8, 8, 9, 9, 8, 8, 8, 8, 6, 6, 9, 9, 9, 6, 0, 0, 0, 0],
  [0, 0, 6, 6, 9, 9, 6, 8, 8, 6, 6, 9, 6, 6, 6, 8, 6, 6, 9, 9, 6, 6, 6, 0, 0],
  [0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 6, 6, 6, 3, 6, 6, 4, 3, 6, 6, 3, 6, 6, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 3, 4, 4, 4, 3, 6, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 4, 4, 7, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 4, 7, 7, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 8, 6, 3, 4, 7, 4, 5, 6, 5, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 9, 6, 8, 6, 5, 4, 8, 8, 8, 6, 8, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0],
];

let movablePixels = [];

const tree = document.querySelector(".tree");
tree.style.display = "grid";
tree.style.gridTemplateColumns = "repeat(25, 7px)";
tree.style.width = "fit-content";


// let seasonNow = "Fall";

for (let y = 0; y < leaves.length; y++) {
  for (let x = 0; x < leaves[y].length; x++) {

    let value = leaves[y][x];

    const pixel = document.createElement("div");
       pixel.style.width = "7px";
    pixel.style.height = "7px";
    pixel.classList.add("pixel");

    if (value == 6) {
      pixel.style.backgroundColor = "#2c2c2c";
    } else if (value == 8) {
      // if (seasonNow === "Fall") {
    // pixel.style.backgroundColor = "#c65a1e";
      // } else {
      pixel.style.backgroundColor = "#168c4f";
      // }
      movablePixels.push(pixel);
    } else if (value == 5) {
      // if (seasonNow === "Fall") {
    // pixel.style.backgroundColor = "#e07a2d"; 
  // } else {
      pixel.style.backgroundColor = "#6fd364";
  // }
      movablePixels.push(pixel);
    } else if (value == 2) {
      // if (seasonNow === "Fall") {
    // pixel.style.backgroundColor = "#f2a65a"; 
  // } else {
      pixel.style.backgroundColor = "#e4f854";
  // }
      movablePixels.push(pixel);
    } else if (value == 9) {
      // if (seasonNow === "Fall") {
    // pixel.style.backgroundColor = "#6b3a1e"; 
  // } else {
      pixel.style.backgroundColor = "#27523a";
  // }
      movablePixels.push(pixel);
    } else if (value == 3) {
      pixel.style.backgroundColor = "#5a474c";
    } else if (value == 4) {
      pixel.style.backgroundColor = "#8d410b";
    } else if (value == 7) {
      pixel.style.backgroundColor = "#fd8342";
    }

    tree.appendChild(pixel);
  }
}

movablePixels.forEach((leaf, index) => {
  leaf.id = "leafno" + index;
  console.log("movable id:", leaf.id);
});

const popup = document.getElementById("popup");
const leafForm = document.getElementById("leaf-form");
const leafInput = document.getElementById("inputLeaf");
let activeLeaf = null;

function addedLeafName(leaf, text) {
  const oldLabel = leaf.querySelector(".leaf-label");
  if (oldLabel) oldLabel.remove();

  const label = document.createElement("div");
  label.className = "leaf-label";
  label.innerText = text;
  leaf.appendChild(label);
  console.log("label for", leaf.id, ":", text);
}

tree.addEventListener("mouseenter", function () {

  let randomIndex = Math.floor(Math.random() * movablePixels.length);
  let chosenPixel = movablePixels[randomIndex];

let moveX = Math.random() * 800 - 100;
let moveY = Math.random() * 300 + 180; 

  chosenPixel.style.transform =
    "translate(" + moveX + "px, " + moveY + "px)";

    popup.style.display = "block";
      activeLeaf = chosenPixel;

});

leafForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let entry = leafInput.value;
  console.log("submit:", JSON.stringify(entry));
  if (entry === "") {
    console.log("empty name, not saving");
    return;
  }
  if (!activeLeaf) {
    console.log("no activeLeaf, not saving");
    return;
  }
  addedLeafName(activeLeaf, entry);
  let payload = { pixelId: activeLeaf.id, text: entry };
  console.log("fetch body:", payload);
  fetch("/add-leaf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then(function (res) {
    console.log("response status:", res.status);
  });
  popup.style.display = "none";
  leafInput.value = "";
  activeLeaf = null;
});

tree.addEventListener("mouseleave", function () {
  console.log("mouse left tree");
});

const weatherGif = document.getElementById("weatherGif");
const gifArray = [
  "/images/kites.gif",
  "/images/raining.gif",
  "/images/sparkling.gif",
  "/images/fireworks.gif",
];
document.addEventListener("dblclick", function () {
  let randomIndex = Math.floor(Math.random() * gifArray.length);
  weatherGif.src = gifArray[randomIndex];
  weatherGif.style.display = "block";

  setTimeout(() => {
    weatherGif.style.display = "none";
  }, 4000);
});

document.addEventListener("click", function () {
  document.getElementById("birds").play();
}, { once: true });