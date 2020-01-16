const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const bootcamps = require("./routes/bootcamp");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

const app = express();

//Body-Parser
app.use(bodyParser.json());

//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`server is running at port ${process.env.PORT}`)
);

//Handle unhandled rejections
process.on("unhandledRejection", (err, Promise) => {
  console.log(`Error:${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
