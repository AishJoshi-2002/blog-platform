const userModel = require('../models/user.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const { createUser }= require('../services/user.service');
const { validationResult } = require('express-validator');

const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    const hashedPassword = userModel.hashPassword(password);
    const user = await createUser({
        name,
        email,
        password: hashedPassword
    })
    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(201).json({ token, user});
};

const loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = user.comparePassword(password);
    if(!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, user });
};

const getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

const logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = { registerUser, loginUser, getUserProfile, logoutUser };