const express = require("express");

const router = express.Router();

const homeController = require('../../controllers/admin/home.controller');

router.get('/', homeController.getHomePage);
router.get('/district/:id', homeController.getDistrict);
router.get('/ward/:id', homeController.getWard);
module.exports = router;