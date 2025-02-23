const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables
let e = require("../controller/auth")
let c = require("../controller/auth")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465
    auth: {
        user: process.env.EMAIL, // Your email from .env file
        pass: process.env.PASS,  // Your app password from .env file
    },
});

const sendVerificationEmail = async (email, verificationCode) => {
    try {
      
        const response = await transporter.sendMail({
            from: `"Kousen" <${process.env.EMAIL}>`, // Correct format
            to: email,  
            subject: "Verify your Email",
            text: `Your verification code is: ${verificationCode}`,
            html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`
        });
        console.log("✅ Email sent successfully:", response.messageId);
    } catch (error) {
       
        console.error("❌ Email sending error:", error.message);
    }
};

// ✅ Export the function so it can be used in other files
sendVerificationEmail("kousenattar2004@gmail.com",255661)
module.exports = { sendVerificationEmail };
