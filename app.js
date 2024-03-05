const express=require('express');
const app=express();
app.get('/tasks',(req,res)=>{
res.json({message:'tasks ok '})
