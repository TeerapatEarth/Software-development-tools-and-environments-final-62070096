const express = require("express");
const router = express.Router();

const TestController = require("../controller/TestController")
router.post('/test/create', TestController.createTest)
router.get('/test', TestController.getAllTest)

module.exports = router