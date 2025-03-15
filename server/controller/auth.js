const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { User, Company } = require("../models/schema");
const { generateToken } = require("../utils/generateToken");
const { sendVerificationEmail } = require("../middleware/email");

const router = express.Router();

// Generate OTP function
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// Registration route
router.post("/register", async (req, res) => {
  try {
    const { role, fullname, email, password, phoneNumber, profileImage, companyId } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "Full name, email, and password are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let validCompanyId = null;
    if (role === "hirer" && companyId && mongoose.Types.ObjectId.isValid(companyId)) {
      validCompanyId = new mongoose.Types.ObjectId(companyId);
    } else if (role === "hirer") {
      return res.status(400).json({ message: "Invalid companyId format." });
    }

    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 min

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      role,
      phoneNumber,
      profileImage,
      companyId: validCompanyId,
      otp,
      otpExpiresAt,
    });

    await newUser.save();
    await sendVerificationEmail(email, otp);

    console.log("✅ OTP Sent:", otp, "to", email);

    res.status(201).json({
      message: "User registered successfully, OTP sent to email.",
      user: newUser,
      otp: process.env.NODE_ENV === "development" ? otp : undefined, // Show OTP in dev mode only
    });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

// OTP verification route
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    console.log("🔍 Verifying OTP for:", email);
    const user = await User.findOne({ email });

    if (!user || !user.otp || !user.otpExpiresAt) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    if (new Date() > user.otpExpiresAt || user.otp !== otp) {
      console.log("❌ Invalid OTP");
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    console.log("✅ OTP Verified for:", email);
    res.status(200).json({ message: "OTP verified successfully!" });
  } catch (err) {
    console.error("❌ OTP Verification Error:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Company creation route
router.post("/create", async (req, res) => {
  try {
    const { companyName, email, phoneNumber } = req.body;

    if (!companyName || !email) {
      return res.status(400).json({ message: "Company name and email are required." });
    }

    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ message: "Company with this email already exists." });
    }

    const newCompany = await Company.create({
      companyName,
      email,
      phoneNumber,
    });

    res.status(201).json({ message: "Company created successfully.", company: newCompany });
  } catch (err) {
    console.error("❌ Company Creation Error:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
