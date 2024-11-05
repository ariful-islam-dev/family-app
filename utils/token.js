const jwt = require('jsonwebtoken')

const generateAuthToken = ({ id , email , name, role}) => {
    const token = jwt.sign({ id , email , name, role}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' })
    return token    
}

module.exports = generateAuthToken