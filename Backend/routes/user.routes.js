const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { registerUser, loginUser, getUserProfile, logoutUser } = require('../controllers/user.controller');
const { authUser } = require('../middlewares/auth.middleware');

router.post('/register', [
    body('name')
        .notEmpty().withMessage("Name is required"),
    body('email')
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid Email"),
    body('password')
        .notEmpty().withMessage("Password is required")
], registerUser);

router.post('/login', [
    body('email')
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid Email"),
    body('password')
        .notEmpty().withMessage("Password is required")
], loginUser);

router.get('/profile', authUser, getUserProfile);

router.get('/logout', authUser, logoutUser);

module.exports = router;