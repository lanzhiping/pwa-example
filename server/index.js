import express from 'express'

express()
    .use('/', express.static('./dist'))
    .listen(3000, () => {
        console.log('app starts at 3000')
    })
