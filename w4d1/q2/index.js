const express = require('express');
const url     = require('url');
const path    = require('path');
const session = require('express-session');
const app     = express();

app.use(express.urlencoded({extended:false}));

app.use(session({
    secret: '2AF02B3C406C7650000C18CD2C590C8E5B47E2BB9D8A4EFDEDB6B71439A7E60BC09C7D3C82C8C9952DE214B2AF1EC5042D25275DE1C0199057993F00642AB1CE',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/result', (req, res) => {
    if (!req.session.information) {
        req.session.information = {}
      }

    console.log(req.session.information);
    req.session.information[req.body.name] = req.body.age;
    res.redirect('back');
});

app.listen(3000);