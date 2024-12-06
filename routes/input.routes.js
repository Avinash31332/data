const express= require('express');
const router= express.Router();
const dataSchema= require('../models/data.model');
const {body,validationResult}= require('express-validator');

router.get('/',(req,res)=>{
    res.render('input');
})

router.post('/',
    async(req,res)=>{
    const {title,story,gameplay,user}= req.body;
    const newData= await dataSchema.create({
        title,
        story,
        gameplay,
        user
    })
    res.send('Your reponse has uploaded to Database');
})

module.exports= router;