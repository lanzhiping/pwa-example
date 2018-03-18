
const express = require('express')
const next = require('next')
const ipv4 = require('./ip')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    express()
        .use('/manifest.json', express.static('manifest.json'))
        .use('/launcher-icon-1x.png', express.static('launcher-icon-1x.png'))
        .use('/launcher-icon-2x.png', express.static('launcher-icon-2x.png'))
        .use('/launcher-icon-4x.png', express.static('launcher-icon-4x.png'))
        .use('/', handle)
        .listen(3000, () => {
            if (ipv4) {
                console.log(`app starts at ${ipv4.address}:3000`)
            } else {
                console.log(`app started at port 3000, please find out your ip manually`)
            }
        });
})
