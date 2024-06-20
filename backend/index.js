//const express = require("express");//
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
const app = express();

dotenv.config({});

const PORT = process.env.PORT || 8080;

app.listen(PORT , () =>{
    connectDB()
    console.log(`Server listen at prot ${PORT}`);
})