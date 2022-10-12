require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT;

app.use(cors());

app.use(morgan(process.env.MORGAN_LOGGING));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey Learn It!");
});

app.use((req, res) => {
  res.status(404).send({ message: "not found" });
});

app.listen(port, () => {
  console.log(`Learn It Api running on ${port}`);
});
