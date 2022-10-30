const express = require("express");
const router = express.Router();
//controllers
const { encrypt } = require("../controller/crypt");

router.route("/").post(encrypt);

module.exports = router;
