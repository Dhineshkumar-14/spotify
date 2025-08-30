import User from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { firstName, lastName, id, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      await User.create({
        fullName: `${firstName} ${lastName}`,
        clerkId: id,
        imageUrl,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in auth controller " + error);
    res.status(500).json({ message: "Internal server error" });
  }
};
