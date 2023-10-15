import express from "express";
import { addPost, getPost } from "../controller/reviewcontroller.js";

const route = express.Router();

//for adding a post into database
route.post("/addpost", addPost);

//for getting all the posts from database
route.get("/getpost", getPost);

export default route;
