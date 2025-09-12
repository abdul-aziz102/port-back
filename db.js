import mongoose from "mongoose";

const createdb = mongoose.connect("mongodb://127.0.0.1:27017/Portfolio")
.then(()=>

    console.log("Database connected")
).catch((err)=>
    console.log(err)
)   
export default createdb;