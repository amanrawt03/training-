const express = require('express')
const router = express.Router()

router.post('/login', (req,res,next)=>{
    res.send('login')
})
router.get('/signup', (req,res,next)=>{
    res.send('signup')
})
router.get('/getProfile', (req,res,next)=>{
    res.send('Profile')
})

module.exports = router