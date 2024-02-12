const { AppError, catchAsync, sendResponse } = require("../helpers/utils");

const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {};

authController.loginWithEmail = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }, "+password");
  if (!user)
    return next(new AppError(400, "Invalid credentails", "Login Error"));

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return next(new AppError(400, "Wrong email or password", "Login Error"));

  acessToken = await user.generateToken();

  return sendResponse(
    res,
    200,
    true,
    { user, acessToken },
    null,
    "Login successful"
  );
});

module.exports = authController;
