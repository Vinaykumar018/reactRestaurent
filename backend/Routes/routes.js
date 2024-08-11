const express=require("express");
const db=require("../Model/schema")
const router=express.Router();
router.post("/",async(req,res)=>{
    const {name,email, password}=req.body;
    const data=new db({name,email, password});
    try{
       
        newPost=await data.save()
        res.status(201).send(newPost);
    }catch(err) {
        res.send(err);
    }
})
router.get("/",async(req,res)=>{
    res.send("get working")
    
})
router.put("/",async(req,res)=>{
    res.send("update working")
    
})
router.delete("/",async(req,res)=>{
    res.send("delete working")
    
})
module.exports=router;