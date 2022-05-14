const axios = require('axios').default;
console.log("Getting cat fact...");
axios.get(`https://catfact.ninja/fact`).then(result=>{
    console.log(result.data.fact);
    console.log('done!');
})