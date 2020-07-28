const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

router
    .route('/')
    .get(collectionController.getAllCollections)
    .post(collectionController.createCollection);

router
    .route('/:id')
    .get(collectionController.getCollection)
    .delete(collectionController.deleteCollection)


module.exports = router;