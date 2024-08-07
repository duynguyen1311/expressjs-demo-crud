const router = require('express').Router()
const categoryController = require('../controller/categoryController')

router.get('/', categoryController.getAllCategories )
router.post('/', categoryController.createCategory)
router.put('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router