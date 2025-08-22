//Server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(express.json());

//MongoDB Connecttion
mongoose.connect(process.env.MONGODB_URI, {
    
})