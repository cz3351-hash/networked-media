const express = require("express");
const nedb = require("@seald-io/nedb");


const app = express();
const database = new nedb({
  filename: "database.txt",
  autoload: true,
});
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs")

app.get("/", (request, response) => {
    response.render("index.ejs");

})

app.post("/add-leaf", (request, response) => {
  console.log("server received body:", request.body);
  let dataToBeAdded = {
    pixelId: request.body.pixelId,
    text: request.body.text,
  };
  database.insert(dataToBeAdded, (err, numAdded) => {
    console.log("added leaf:", numAdded, "err:", err);
    response.sendStatus(201);
  });
});

// create an endpoint to get the leaves
// app.post("/getpastleaves", (request, response) => {

  app.get("/history", (request, response) => {
  database.find({}, (err, leaves) => {
    response.render("history.ejs", { leaves: leaves || [] });
  });
});

  app.get("/about", (request, response) => {
    response.render("about.ejs");
});



app.listen(2250, () => {
    console.log('server has started!');
});