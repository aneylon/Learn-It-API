const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const expiration = { expiresIn: "3d" };

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, secret, expiration);
};

const userSignIn = async (req, res) => {
  // res.json({ message: 'user sign in' })
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userSignUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userSignIn,
  userSignUp,
};
