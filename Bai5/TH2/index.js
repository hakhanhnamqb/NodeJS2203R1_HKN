const fs = require('fs')
const express = require('express')

const app = express()
const port = 3000

app.get("/image", (req, res) => {
    const img = fs.readFile('image.png', function (err, data) {
        console.log(err);
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': data.length
        });
        res.end(data);
    })
})
app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})