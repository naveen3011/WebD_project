require("dotenv").config();
require("express-async-errors"); // handling errors
const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
//router
const cryptRoute = require("./routes/crypt");

//built in middlewares
app.use(express.json());
//serving static files
app.use(express.static(__dirname + "/public"));

//middleware
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler-middleware");

//routes

app.use("/api/v1", cryptRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server for crypt running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
