const express=require("express");
const app=express();
const schema=require("./Routes/routes")
app.use(express.json())
const mongoose=require("mongoose");
try{
    mongoose.connect("mongodb://localhost:27017/RESTAURENT-APP").then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log("Can't connect to database",err)
    })
}catch(err){
    console.log("Connection faild to db")
}
app.use("/",schema)

const port=7000

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})