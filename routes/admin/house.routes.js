const express = require("express");

const router = express.Router();

const houseController = require('../../controllers/admin/house.controller');

router.get('/', houseController.getList);

router.get('/add', houseController.getFormAdd)
router.post('/add', houseController.addHouse);

router.delete('/delete/:id', houseController.deleteHouse);

router.get('/update/:id', houseController.getFormUpdate)
router.put('/update/:id', houseController.updateHouse);
module.exports = router;