const express      = require("express");
const path         = require("path");
const cookieParser = require('cookie-parser');
const app          = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("add-cookie", { cookies: req.cookies } );
});

app.post("/add-cookie", (req, res) => {
    if(req.body.key !== "" && req.body.value !== "") {
        res.cookie(req.body.key, req.body.value, { maxAge: 60000 } );
    }
    res.redirect("back");
});

app.listen(3000);