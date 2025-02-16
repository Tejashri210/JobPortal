const { User} = require("../models/schema");
const express = require("express");
const router = express.Router();
const { generateToken } = require("../utils/generateToken");
const bcrypt = require("bcrypt");

router.post("/login", async function(req, res) {
    let { email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password) {
        return res.status(400).json({ message: 'Email or password is empty' });
    }

    try {
        // Find the user by email
        const logInUser = await User.findOne({ email });
        if (!logInUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, logInUser.password);
        if (isPasswordValid) {
            // Generate a token and set it in a cookie
            let token = generateToken(logInUser);
            res.cookie("token", token);

            return res.status(200).json({ message: "Login successful" });
            res.send("login successfull")
            console.log("login suceefull")
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

module.exports = router;
