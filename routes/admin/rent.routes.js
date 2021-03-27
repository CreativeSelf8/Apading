const express = require("express");

const router = express.Router();

const rentController = require('../../controllers/admin/rent.controller');

router.get('/', rentController.getList);

router.get('/add', rentController.getFormAdd)
router.post('/add', rentController.addRent);

router.delete('/delete/:id', rentController.deleteRent);

router.get('/update/:id', rentController.getFormUpdate)
router.put('/update/:id', rentController.updateRent);
module.exports = router;