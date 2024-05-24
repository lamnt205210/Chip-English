const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./src/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("./passport");

dotenv.config({ path: "./config.env" });
app.use(
  cors({
    origin: process.env.URL_CLIENT,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
routes(app);

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
