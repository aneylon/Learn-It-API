require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mongoDB = process.env.MONGO_DATABASE;
const port = process.env.PORT;

app.use(cors());

app.use(morgan(process.env.MORGAN_LOGGING));
app.use(express.json());

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const userRoute = require("./routes/userRoute");
app.use("/user", userRoute);
const subjectRoute = require("./routes/subjectRoute");
app.use("/subject", subjectRoute);
const lessonRoute = require("./routes/lessonRoute");
app.use("/lesson", lessonRoute);
const cardRoute = require("./routes/cardRoute");
app.use("/card", cardRoute);
const cardSetRoute = require("./routes/cardSetRoute");
app.use("/cardSet", cardSetRoute);

app.get("/", (req, res) => {
  res.send("Hey Learn It!");
});

app.use((req, res) => {
  res.status(404).send({ message: "not found" });
});

app.listen(port, () => {
  console.log(`Learn It Api running on ${port}`);
});
