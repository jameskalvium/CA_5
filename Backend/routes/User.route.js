const express = require("express")
const router = express.Router()
const User = require('../models/User.model')

router.post('/add-user',async (req,res)=>{
    const {userName , email, password} = req.body;
    const newUser = new User({
        userName ,
        email,
        password
    })
    await newUser.save();
    res.json({message:"user added"})
})

router.get('/users', async(req,res) =>{
    try{
        const user = await User.find()
        res.json(user)
    }catch(err){
        res.json({error : err.message})
    }
})


module.exports = router;