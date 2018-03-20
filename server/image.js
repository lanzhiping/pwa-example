const https = require('https');
const subscriptionKey = '71002e7b63b643049871afd46e007b41';
const host = 'api.cognitive.microsoft.com';
const path = '/bing/v7.0/images/search';

module.exports = (req, res, next) => {
    const term = req.query.search;

    if (term) {
        console.log('Searching images for: ' + term);

        const requestParams = {
            method : 'GET',
            hostname : host,
            path : path + '?q=' + encodeURIComponent(term),
            headers : {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
            }
        };

        https
            .request(requestParams, (response) => {
                let body = '';
                response.on('data', (d) => { body += d; });
                response.on('end', () => {
                    res.send(JSON.parse(body))
                })
                response.on('error', (error) => {
                    res.send(error)
                })
            })
            .end()
    } else {
        next();
    }
}
