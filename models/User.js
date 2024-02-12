const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

//Create users schema
const userSchema = Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    avatarURL: { type: String, required: false, default: "" },
    isDeleted: { type: Boolean, default: false, select: false },
  },
  {
    timestamp: true,
  }
);

userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password;
  delete obj.isDeleted;
  return obj;
};

userSchema.methods.generateToken = async function () {
  const accessToken = await jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return accessToken;
};
console.log(JWT_SECRET_KEY);
const User = mongoose.model("Users", userSchema);

module.exports = User;
