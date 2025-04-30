const userModel = require('../models/user.model');

const createUser = async (name, email, role, password) => {
    try {
        if (!name || !email || !password) {
            throw new Error('All fields are required');
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }
        const user = await userModel.create({
            name,
            email,
            role,
            password
        })
        return user;
    } catch(error) {
        throw error;
    }
};

module.exports = { createUser };