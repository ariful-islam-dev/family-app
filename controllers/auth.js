const generateAuthToken = require("../utils/token");


const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateAuthToken({ id: user._id, email: user.email, name: user.name, role: user.role });
    res.status(200).json({ token });
}

const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide name, email and password' });
    }

    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();
    const token = generateAuthToken({ id: savedUser._id, email: savedUser.email, name: savedUser.name, role: savedUser.role });
    res.status(201).json({ token });
}

module.exports = {
    login,
    register
}