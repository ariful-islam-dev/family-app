const { login, register } = require('../controllers/auth')

const router = require('express').Router()

router.get("/login", login )
router.get("/register",  register )