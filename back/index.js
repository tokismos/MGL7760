// require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const mainRouter = require("./routes/mainRoute");
const cors = require("cors")({
  origin: "*",
});
const port = process.env.PORT || 3000;
app.use(cors);
const MONGODB_URI =
  "mongodb+srv://toki:toki@cluster0.2pc3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.urlencoded({}));
app.use(express.json({}));
app.use("/", mainRouter);
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});

mongoose.connection.once("connected", () => {
  console.log("connected to DB !!!", process.env.PORT);
});
mongoose.connection.on("error", (err) => {
  console.error("error connecting", err);
});

app.listen(port, () => console.log("connencted"));
