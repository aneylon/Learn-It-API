const express = require("express");
const router = express.Router();

const { userSignIn, userSignUp } = require("../controllers/userController");

// use logging middle ware?

router.post("/signIn", userSignIn);

router.post("/signUp", userSignUp);

// get users
// get user by id
// patch user
// delete user

module.exports = router;
