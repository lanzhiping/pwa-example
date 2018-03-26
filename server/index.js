const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const ipv4 = require('./ip')
const imageApi = require('./image')
const addPost = require('./addPost')
const getPosts = require('./getPosts')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    express()
        .use('/manifest.json', express.static('manifest.json'))
        .use('/launcher-icon-1x.png', express.static('launcher-icon-1x.png'))
        .use('/launcher-icon-2x.png', express.static('launcher-icon-2x.png'))
        .use('/launcher-icon-4x.png', express.static('launcher-icon-4x.png'))
        .use('/pwa-lighthouse.png', express.static('pwa-lighthouse.png'))
        .use('/service-worker.js', express.static('service-worker.js'))
        .get('/image', imageApi)
        .post('/post', bodyParser.json(), addPost)
        .get('/posts', getPosts)
        .use('/', handle)
        .listen(process.env.PORT || 3000, () => {
            if (ipv4) {
                console.log(`app starts at ${ipv4.address}:3000`)
            } else {
                console.log(`app started at port 3000, please find out your ip manually`)
            }
        });
})
