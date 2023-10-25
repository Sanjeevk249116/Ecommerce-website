const express = require("express");
const { connection } = require("./config/connection");
const { Router } = require("./routeslink/router");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use('',Router);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connect");
  } catch (err) {
    console.log("not connect");
  }
  console.log(`server started at ${process.env.PORT}`);
});
