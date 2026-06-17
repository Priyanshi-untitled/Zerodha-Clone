const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

const verifyUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ status: false, message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ status: false, message: "User not found" });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid or expired token" });
  }
};

module.exports = verifyUser;