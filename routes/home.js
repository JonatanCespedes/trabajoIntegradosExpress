const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController')// Aqui requerir el ...Controller

router.get('/', homeController.bienvenida)





module.exports = router;