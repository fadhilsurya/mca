const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product')
// router.get('/', productController)
router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.post('/', ProductController.create)

router.delete('/:id')




module.exports = router