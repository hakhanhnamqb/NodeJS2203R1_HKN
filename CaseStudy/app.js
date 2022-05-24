const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const mongose = require('mongoose');
const port = 3000;

const db_url = "mongodb://namhk:namhk@127.0.0.1:27017/caseStudy";
const db = mongose.connection;
mongose.connect(db_url,{useNewUrlParser: true}).then(() => console.log('DB Connected')); 
db.on('err',(err)=>{
    console.log("DB connection error " + err);
})

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static('./views'));
const libraryRoute = require('./routes/libraryRoute');
app.use('/library',libraryRoute);
const bookRoute = require('./routes/bookRoute');
app.use('/book',bookRoute);
const borrowBookRoute = require('./routes/borrowBookRoute');
app.use('/borrow',borrowBookRoute);

app.listen(port, () => {
    console.log("Server running on port " + port);
})