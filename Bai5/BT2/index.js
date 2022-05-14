const axios = require('axios')
const fs = require('fs')
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
        if (response.status === 200) {
            var buf = Buffer.from(JSON.stringify(response.data));
            fs.writeFile("data.json",buf, function(err){
                console.log(err);
            })
        }
    })