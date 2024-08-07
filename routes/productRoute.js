const router = require('express').Router()
const productControlelr = require('../controller/productController')

router.get('/', productControlelr.getAllProducts)
router.post('/',productControlelr.createProduct)
router.put('/:id',productControlelr.updateProduct)
router.delete('/:id',productControlelr.deleteProduct)
router.get('/:id',productControlelr.getProductById)
router.get('/category/:categoryId',productControlelr.getProductsByCategoryId)
module.exports = router