const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()

const password = require('./generate-password.js');
const verify = require('./verify-auth.js');

app.use(express.json());

app.get('/generate', cors(), (req, res) => {

let {caps, num, char, len} = req.query;

if(verify(req.headers.authorization)){
    let result = password(num, char, len, caps);
    res.status(200).json({ password : result}).end();
}
else{
    res.status(401).end();
}
})

app.listen(7070);

// get http://localhost:7070/generate - get a random password
// get http://localhost:7070/generate?num=true&char=true&caps=true&len=14 - get a random password with nums, chars, cap letters and len = 14