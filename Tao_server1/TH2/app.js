const express = require('express');
//const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './view');

/*app.get("/", (req, res) => {
    res.sendFile(path.reselve(__dirname, 'pages/index.html'))
})*/

app.get("/", (req, res) =>{
    res.render("index")
})
app.get("/about", (req, res) =>{
    res.render("about")
})
app.get("/contact", (req, res) =>{
    res.render("contact")
})
app.get("/post", (req, res) =>{
    res.render("post")
})

app.listen(3000, () => {
    console.log("App listiening at port 3000");
})