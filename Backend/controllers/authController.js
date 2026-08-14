const jwt = require ('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signup = async (req,res) => {
    const { email, username, password } = req.body;
    const emailExists = await User.findOne({email});
    if (emailExists) return res.status(400).json({message: "Email Exists!"});
    const usernameExists = await User.findOne({username});
    if (usernameExists) return res.status(400).json({message:"Username Exists"})

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email , password:hashed});

    const token = jwt.sign({ id:user._id,role: user.role, username:user.username}, process.env.JWT_SECRET, {expiresIn: '1h'})

    res.json({token})
};
exports.login = async (req, res) => {
    const {email, password} = req.body;
    const emailExists = await User.findOne({email});
    if (!emailExists) return res.status(400).json({message: "User not found"});
    
  
    const match = await bcrypt.compare(password, user.password)
    if(!match) return res.status(401).json({message: "Invalid password"})
    const token = jwt.sign({id:user._id, role: user.role, username: user.username},process.env.JWT_SECRET,{expiresIn:'1h'})

    res.json({token})

};



