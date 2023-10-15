import mongoose from "mongoose";

//This is the model schema to store database
const reviewSchema = mongoose.Schema({
  appuse: {
    type: String,
    required: true,
  },
  goal: {
    type: Array,
    required: true,
  },
  rateuser: {
    type: String,
    required: true,
  },
  improve: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
