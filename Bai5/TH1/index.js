const axios = require('axios');
const fs = require('fs');
const { url } = require('inspector');

axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        const data = response.data
        if (data.status === 'success') {
            return data.message
        }

        return ''
    })
    .then(url => {
        if (url !== '') {
            axios.get(url, { responseType: 'arraybuffer' })
                .then(response => {
                    fs.writeFile('image.png', response.data, null, () => {
                        console.log('Done');
                    });
                })
        }
    })