const express = require('express');
const app = new express();

app.use(express.static('./public'))

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
})
