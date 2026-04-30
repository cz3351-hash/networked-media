const express = require("express");
const nedb = require("@seald-io/nedb");

const leafdb = new nedb({ filename: "leafdb.txt", autoload: true });

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  const n = Math.floor(Math.random() * 15) + 1;
  const randomLeaf = "/images/leaf/leaf" + n + ".PNG";

  leafdb.find({}, function (err, savedList) {
    let leafNamesText = "";
    if (savedList) {
      for (let i = 0; i < savedList.length; i++) {
        if (i > 0) {
          leafNamesText += "\n";
        }
        leafNamesText += savedList[i].name;
      }
    }
    response.render("index", {
      randomLeaf: randomLeaf,
      leafNamesText: leafNamesText,
    });
  });
});

app.get("/about", function (request, response) {
  response.render("about");
});

app.post("/save-leaf", function (request, response) {
  const leafToSave = {
    name: request.body.leafName,
    image: request.body.image,
  };

  leafdb.insert(leafToSave, function (err, newDoc) {
    console.log("err: ", err);
    console.log("newDoc: ", newDoc);
    response.status(200).send("ok");
  });
});

app.listen(2250, function () {
  console.log("server has started!");
});
