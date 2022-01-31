const express = require("express");
const router = express.Router();
const { fetchMainPage, sendMail, getEmail } = require("./Controller/Main");

router.route("/").get(fetchMainPage);
router.route("/sendmail").post(sendMail);

module.exports = router;
