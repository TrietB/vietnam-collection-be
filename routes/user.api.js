const express = require("express");
const router = express.Router();
const { getUsers, register } = require("../controllers/user.controllers");
const validators = require("../middlewares/validators");
const { body } = require("express-validator");

/* GET users listing. */
router.get("/", getUsers);

/* POST create new user */

router.post(
  "/",
  validators.validate([
    body("name", "Invalid name").exists().notEmpty(),
    body("email", "Invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "Invalid password").exists().notEmpty(),
  ]),
  register
);

module.exports = router;
