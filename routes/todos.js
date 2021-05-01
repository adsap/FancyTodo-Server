const router = require('express').Router()
const TodoController = require('../controllers/TodoController')
const { todoAuthorization } = require('../middlewares/auth');


router.post('/', TodoController.add)
router.get('/', TodoController.display)
router.get('/:id', todoAuthorization, TodoController.detail)
router.put('/:id', todoAuthorization, TodoController.update)
router.patch('/:id', todoAuthorization, TodoController.updateStatus)
router.delete('/:id', todoAuthorization, TodoController.delete)

module.exports = router