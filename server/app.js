const express = require('express');
const connectDB = require('../server/config/dbconnection');
const authRoutes = require('../server/controller/auth');
const logInUser = require("../server/controller/login")

const route = require("../server/routes/register")
require('dotenv').config();


const app = express();


app.use(express.json());


connectDB();


app.use('/', route);
app.use("/",authRoutes)
app.use("/",logInUser)




const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

