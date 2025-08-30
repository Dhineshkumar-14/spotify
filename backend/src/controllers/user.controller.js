import User from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ clerkId: { $ne: req.auth.userId } });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in auth controller " + error);
    next(error);
  }
};
