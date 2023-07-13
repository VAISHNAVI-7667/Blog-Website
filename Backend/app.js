import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';

let app=express();
app.use(cors())
app.use(express.json())
//we have to use the middleware to use the routes
//this is a specific url "http://localhost:5000/api/user/..........."
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect("mongodb+srv://vaishnavimurugan3:dvTC6YnPxtAtx53N@cluster0.admqzoi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("DB connected")).catch((err)=>
{
    console.log(err);
})
app.listen(5000,()=>
{
    console.log("Server connected");
});


/*
routes - to design the route
model - to design the schema
controllers - to give functionality to the routes
*/