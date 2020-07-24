const express = require('express');
const router = express.Router();
const posterController = require('../controllers/posterController');

router
  .route('/')
  .get(posterController.getAllPosters)
  .post(posterController.createPoster);

router.get('/poster/:slug', posterController.getPoster)

module.exports = router;