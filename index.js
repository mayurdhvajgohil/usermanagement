// const dotenv = require('dotenv');
// dotenv.config({ path: "./config.env" });
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app= express("method-override");
const router = express.Router();
const methodOverride = require("method-override")
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js',express.static(path.resolve(__dirname, 'public/js')));
app.use(methodOverride('_method'))


const PORT  = process.env.PORT || 3055;

// connect db

// 

mongoose
    .connect(process.env.DB_URI,{family:4})
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });



// middleware

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret:"my secret key",
    saveUninitialized:true,
    resave:false
}));

app.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

// temp eng
app.set("view engine","ejs");





// user route

app.use("/", require("./routs/routs.js"))








app.listen(PORT,()=>{
    console.log(`connected ${PORT}`)
})