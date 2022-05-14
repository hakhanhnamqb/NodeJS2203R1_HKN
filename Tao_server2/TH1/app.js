const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.json());
const port = 7000;

const db_url = "mongodb://MAIN:MAIN@127.0.0.1:27017/codegym";
const db = mongoose.connection;

mongoose.connect(db_url,{
    useNewUrlParser: true
}).then(()=>{
    console.log('DB connect')
});
db.on('error',(err)=>{
    console.log("DB contect err", err.message);
});

app.set('view engine', 'ejs');
app.set('views', './view');

const userRoute = require('./routes/userRoutes');
app.use('/user',userRoute);

app.listen(port,()=>{
    console.log("server running on port"  + port);
})