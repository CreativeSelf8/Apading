const express = require("express");

const router = express.Router();

const rentController = require('../controllers/rent.controller');

router.get('/', rentController.getList);

module.exports = router;