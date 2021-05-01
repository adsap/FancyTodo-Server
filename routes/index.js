const router = require('express').Router()
const todoRoutes = require('./todos')
const userRoutes = require('./users')
const { loginAuthentication } = require('../middlewares/auth');


router.use('/users', userRoutes)
router.use(loginAuthentication);
router.use('/todos', todoRoutes)


module.exports = router