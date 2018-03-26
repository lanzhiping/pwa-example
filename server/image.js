const https = require('https');
const subscriptionKey = '71002e7b63b643049871afd46e007b41';
const host = 'api.cognitive.microsoft.com';
const path = '/bing/v7.0/images/search';
const defaultImage = 'https://tse4.mm.bing.net/th?id=OIP.A6zdfyorlBrvGAWFKeJ_bQHaEe&pid=Api';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * ( max - min + 1) + min);
}

const terms = ['cats', 'dogs', 'birds']

module.exports = (req, res, next) => {
    const term = terms[randomIntFromInterval(0, 2)]

    if (term) {
        console.log(`Searching images for: ${term}`);

        const requestParams = {
            method : 'GET',
            hostname : host,
            path : `${path}?q=${encodeURIComponent(term)}`,
            headers : {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
            }
        };

        https
            .request(requestParams, (response) => {
                let body = '';
                response.on('data', (d) => { body += d; });
                response.on('end', () => {
                    const images = JSON.parse(body).value.map(img => img.thumbnailUrl)
                    const imageUrl = images[randomIntFromInterval(0, 29)]
                    res.send(imageUrl)
                })
                response.on('error', (error) => {
                    console.log('response error', error)
                    res.send(defaultImage)
                })
            })
            .on('error', (error) => {
                console.log('request error', error)
                res.send(defaultImage)
            })
            .end()
    } else {
        next();
    }
}
