const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models/schema');  
const {generateToken} = require("../utils/generateToken")
const router = express.Router();
// const sendVerificationEamil = require("../config/emailconfig")
//import { sendVerificationEamil } from '../middelware/email';
const {sendVerificationEamil}  = require("../middelware/email")
// Registration route
router.post('/register', async (req, res) => {
  const { role, fullname, email, password,phoneNumber, profileImage, companyId} = req.body;

  // Check for missing fields
  if (!fullname || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields: fullname, email, and password are required.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
      phoneNumber, profileImage, companyId
      
    });
    console.log(newUser)
     
    let token = generateToken(newUser);
    res.cookie("token",token);
    console.log(token)
    let e ="kousenattar2004@gmail.com"
    await sendVerificationEamil();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({
      message:
        process.env.NODE_ENV === 'development'
          ? err.message
          : 'Internal server error',
    });
  }
});



module.exports = router;
