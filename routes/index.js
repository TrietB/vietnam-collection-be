const express = require("express");
const router = express.Router();

const userRouter = require("./user.api");
const authApi = require("./auth.api");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("welcome to Vietnam-Collections-BE");
});

router.use("/user", userRouter);

//auth api
router.use("/auth", authApi);

module.exports = router;
