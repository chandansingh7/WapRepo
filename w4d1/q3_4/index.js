const express = require('express');
const router  = require("./router");
const path    = require('path');
const session = require('express-session');
const app     = express();

app.use(session({
    secret: '2AF02B3C406C7650000C18CD2C590C8E5B47E2BB9D8A4EFDEDB6B71439A7E60BC09C7D3C82C8C9952DE214B2AF1EC5042D25275DE1C0199057993F00642AB1CE',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({extended:false}));

app.use('/products', router);

app.listen(3000);