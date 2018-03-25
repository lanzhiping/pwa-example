const jsonfile = require('jsonfile')
const path = require('path')
const file = path.resolve(__dirname, 'posts.json')

function getPosts(req, res) {
    jsonfile.readFile(file, (err, obj) => {
        const posts = obj.posts
        res.send(posts)
    })
}

module.exports = getPosts;
