const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs')
// const jsonFile = require('../assets/items.json');
const { json } = require('body-parser');
let rawdata = ""
let features = ""
try {
    rawdata = fs.readFileSync('items.json')
    features = JSON.parse(rawdata); 
} catch (error) {
    console.log(error);   
}
router.get('/', async(req,res)=>{
    res.send(features)
});

module.exports = router;