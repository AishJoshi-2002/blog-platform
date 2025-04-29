const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const blogRoutes = require ('./routes/blog.routes');

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);
// app.use('/blogs', blogRoutes);

module.exports = app;