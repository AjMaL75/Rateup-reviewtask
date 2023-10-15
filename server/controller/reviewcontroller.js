import Review from "../model/Review.js";

const addPost = async (req, res) => {
  try {
    const newpost = await new Review({
      appuse: req.body.appuse,
      goal: req.body.goal,
      rateuser: req.body.rateuser,
      improve: req.body.improve,
      dob: req.body.dob,
    });

    await newpost.save();
    res.status(200).json({ success: true, message: "new post has added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  try {
    const getAllPost = await Review.find();
    res.status(200).json({ success: true, result: getAllPost });
  } catch (error) {
    console.log(error);
  }
};

export { addPost, getPost };
