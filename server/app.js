const express = require('express');
const connectDB = require('../server/config/dbconnection');
const authRoutes = require('../server/controller/auth');
const logInUser = require("../server/controller/login")
const login = require("../server/routes/login")

const register = require("../server/routes/register")
require('dotenv').config();



const app = express();


app.use(express.json());


connectDB();


app.use('/', logInUser);

app.use("/",register)
app.use("/",authRoutes)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

