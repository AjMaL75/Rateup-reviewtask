import express from "express";
import dotenv from "dotenv";
import connection from "./configuration/mongoConnection.js";
import reviewRoute from "./routes/reviewroute.js";
import cors from "cors";

//env file configuration
dotenv.config();

//making an app using express
const app = express();

//middlewares

app.use(express.json());
app.use(cors());
//end point api route
app.use("/reviewroute", reviewRoute);

//to run server with port
app.listen(8000, () => {
  //this method is creating for configuring server with mongodb database
  connection();
  console.log("server has running on 8000 port");
});
