const greenPixels = [8, 5, 2, 9];

function isGreen(code) {
  for (let i = 0; i < greenPixels.length; i++) {
    if (greenPixels[i] === code) {
      return true;
    }
  }
  return false;
}

function groundDotWithName(name) {
  if (name === "") {
    return;
  }

  const ground = document.getElementById("groundPixels");
  const wrap = document.createElement("div");
  wrap.className = "ground-wrap";

  const dot = document.createElement("div");
  dot.className = "ground-dot";
  const pick = Math.floor(Math.random() * greenPixels.length);
  dot.style.backgroundColor = colors[greenPixels[pick]];

  const label = document.createElement("div");
  label.className = "ground-label";
  label.textContent = name;

  wrap.style.left = Math.floor(Math.random() * 100) + "%";
  wrap.style.top = 66 + Math.floor(Math.random() * 34) + "%";

  wrap.appendChild(dot);
  wrap.appendChild(label);
  ground.appendChild(wrap);
}

function onLeafFormSubmit(event) {
  event.preventDefault();

  const leafName = document.getElementById("leafName");
  const leafImage = document.getElementById("leafImage");

  const params = new URLSearchParams();
  params.set("leafName", leafName.value);
  params.set("image", leafImage.value);

  fetch("/save-leaf", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  })
    .then(function (res) {
      onSaveLeafResponse(res);
    })
    .catch(function (err) {
      console.log("fetch error: ", err);
    });
}

function onSaveLeafResponse(res) {
  const popup = document.getElementById("popupName");
  const leafName = document.getElementById("leafName");
  const newName = leafName.value;

  if (res.ok) {
    popup.style.display = "none";
    leafName.value = "";
    groundDotWithName(newName);
  }
}

function onTreeMouseEnter() {
  const popup = document.getElementById("popupName");
  const leafImage = document.getElementById("leafImage");

  const spots = [];
  for (let y = 0; y < leaves.length; y++) {
    for (let x = 0; x < leaves[y].length; x++) {
      if (isGreen(leaves[y][x])) {
        spots.push({ x: x, y: y });
      }
    }
  }
  if (spots.length === 0) {
    return;
  }

  const pick = Math.floor(Math.random() * spots.length);
  const sy = spots[pick].y;
  const sx = spots[pick].x;
  leaves[sy][sx] = 0;

  renderTree();

  const imgNum = Math.floor(Math.random() * 15) + 1;
  const imgPath = "/images/leaf/leaf" + imgNum + ".PNG";
  document.getElementById("popupLeafImg").src = imgPath;
  leafImage.value = imgPath;

  popup.style.display = "flex";
}

window.onload = () => {
  document.getElementById("groundPixels").innerHTML = "";

  const lines = document.getElementById("leafNamesText").value.split("\n");
  for (let i = 0; i < lines.length; i++) {
    groundDotWithName(lines[i]);
  }

  renderTree();

  const tree = document.getElementById("tree");
  const leafForm = document.getElementById("leafForm");

  leafForm.addEventListener("submit", onLeafFormSubmit);
  tree.addEventListener("mouseenter", onTreeMouseEnter);
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

const colors = {
  6: "#2c2c2c",
  8: "#168c4f",
  5: "#6fd364",
  2: "#e4f854",
  9: "#27523a",
  3: "#5a474c",
  4: "#8d410b",
  7: "#fd8342",
};

function renderTree() {
  const tree = document.getElementById("tree");
  tree.innerHTML = "";

  for (let y = 0; y < leaves.length; y++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let x = 0; x < leaves[y].length; x++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      const code = leaves[y][x];
      pixel.style.backgroundColor = code === 0 ? "transparent" : colors[code];
      row.appendChild(pixel);
    }

    tree.appendChild(row);
  }
}
