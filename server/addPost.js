const jsonfile = require('jsonfile')
const path = require('path')
const file = path.resolve(__dirname, '../posts.json')
const { pushPostToClient } = require('./pushPostToClient')

let posts = null;

function loadPosts() {
    return posts
        ? Promise.resolve(posts)
        : new Promise((resolve, reject) => {
            jsonfile.readFile(file, (err, obj) => {
                posts = obj.posts
                resolve(posts)
            })
        })
}

function addPost(req, res) {
    loadPosts().then(posts => {
        const newPost = req.body

        posts.unshift(newPost)
        jsonfile.writeFile(file, { posts }, () => {
            pushPostToClient(newPost);
            res.send({ add: 1 })
        })
    })
}

module.exports = addPost
