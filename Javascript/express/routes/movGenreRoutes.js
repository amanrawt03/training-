const express = require('express')
const router = express.Router()

router.get('/scifi', (req,res,next)=>{
    res.send("I love sci-fi movies...")
})
router.get('/action', (req,res,next)=>{
    res.send("I love action movies...")
})

module.exports = router