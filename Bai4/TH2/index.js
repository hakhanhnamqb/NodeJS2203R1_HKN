const axios = require('axios').default;
const getUserdata = async () => {
    const userData = await axios.get(`https://randomuser.me/api`)
    userData.data.results.forEach(element => {
        console.log(element.name);
    });
}
getUserdata();
console.log('Done!');