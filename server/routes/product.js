const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product')
// router.get('/', productController)
router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.post('/', ProductController.create)
router.patch('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)




module.exports = router