require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((e) => {
    console.log("Error in connecting to database:", e.message);
  });
