const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.json());

const port = 3000;
const db_url = "mongodb://MAIN:MAIN@127.0.0.1:27017/codegym";
const db = mongoose.connection;
mongoose.connect(db_url,{useNewUrlParser: true}).then(()=> console.log('DB Connected'));
db.on('err',(err)=>{
    console.log('DB connection error: ', err);
})
app.set("view engine","ejs");
app.set("views","./views");
const productRoute = require('./routes/productRoute');
app.use('/product', productRoute);

app.listen(port,()=>{
    console.log("Server running on port " + port);
})