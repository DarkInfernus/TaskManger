const express = require("express");
const port = 8000;
const mongoose = require("./config/mongoose");
const app = express();
const toDoList = require("./model/task");
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/index.js"));
app.use(express.static("./static"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(port, (error) => {
  if (error) {
    return console.log(
      `There was following error in connecting to the server ${error}`
    );
  }
  console.log(`Server is up and running at port ${port}`);
});
