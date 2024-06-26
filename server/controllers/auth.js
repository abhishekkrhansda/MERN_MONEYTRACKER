// controllers/auth.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    const { username, email,password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username,email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log("user details",username);

    try {
        const user = await User.findOne({ username });
        console.log("user",user);
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
        return res.json({token,userId : user._id , users : user.username});
        

        res.status(200).json(username);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
};

// middleware/auth.js


module.exports = { signup, login };
