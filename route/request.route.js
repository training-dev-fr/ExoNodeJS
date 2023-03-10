const express = require("express");
const router = express.Router();
const randController = require("../controller/rand.controller");
const auth = require("../middleware/auth");


router.get('/rand',auth, randController.rand);

module.exports = router;