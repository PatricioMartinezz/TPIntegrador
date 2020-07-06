const express = require('express')
const router = express.Router()

const marcasController = require('../controllers/marcasController')

router.get('/', marcasController.index)
router.get('/:marcas', marcasController.id)

module.exports = router