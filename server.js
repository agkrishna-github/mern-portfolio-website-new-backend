const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const ConnectDB = require("./config/dbConnect");
const headerRouter = require("./routes/headerRouter");
const imageRouter = require("./routes/imageRouter");
const technologyRouter = require("./routes/technologyRouter");
const projectRouter = require("./routes/projectRouter");
const enquiryRouter = require("./routes/enquiryRoute");

ConnectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/headerDetails", headerRouter);
app.use("/api/uploadImg", imageRouter);
app.use("/api/technology", technologyRouter);
app.use("/api/project", projectRouter);
app.use("/api/enquiry", enquiryRouter);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
