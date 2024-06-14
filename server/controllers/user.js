const User = require('../models/User');

exports.addUser = async(req,res) =>{
    try {
        const userData = req.body;
        const newUser = new User(userData);
        await newUser.save();
        res.status(201).json({ message: 'User data added successfully' });
    } catch (error) {
        console.error('Error adding user data:', error);
        res.status(500).json({ message: 'Failed to add user data' });
    }
}