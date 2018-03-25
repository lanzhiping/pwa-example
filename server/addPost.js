const jsonfile = require('jsonfile')
const path = require('path')
const file = path.resolve(__dirname, 'posts.json')

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

loadPosts()

function addPost(req, res) {
    loadPosts().then(posts => {
        const newPost = req.body

        posts.push(newPost)

        jsonfile.writeFile(file, { posts }, () => {
            res.send({ add: 1 })
        })
    })
}

module.exports = addPost
