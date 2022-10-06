const express = require('express');
const router = express.Router();

const User = require('../model/userSchema')

require('../db/connection')

router.get('/',(req,res)=>{
    res.send('this is your route.js server ')
})


router.post('/',(req,res)=>{

    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error : 'plz filled the fild'})

    }

    User.findOne({email:email})
    .then((userexist)=>{
        if(userexist){
            return res.status(422).json({error : 'email already exist'})
        }

        const student = new User({name,email,phone,work,password,cpassword})

        student.save().then(()=>{res.status(201).json({message : "your registration successful"})})
        .catch((err)=>{res.status(500).json({message : "failed to registerad"})})
        console.log(student)
    }).catch((err)=>{console.log(err)})

});

module.exports = router