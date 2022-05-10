const express = require("express");
const router = express.Router();

const BookingController = require("../controller/BookingController")
router.post('/booking/create', BookingController.createBooking)
router.get('/booking', BookingController.getBookging)

module.exports = router