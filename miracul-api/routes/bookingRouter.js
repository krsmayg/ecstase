const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();
router.post("/checkout-session", bookingController.getCheckoutSession);

module.exports = router;
