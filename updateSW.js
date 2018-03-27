const fs = require('fs')

function updateSWWithId(id) {
    const swStandardPath = './sw.js'
    const swPath = './service-worker.js'

    fs.readFile(swStandardPath, 'UTF-8', (err, data) => {
        if (err) {
            return console.log('failed to find SW in current directory', err);
        }

        const result = data
            .replace(/BUILD_ID/g, id)
            .replace(/'isDev'/, process.env.NODE_ENV !== 'production' ? 'true' : 'false');

        fs.writeFile(swPath, result, 'utf8', (err) => {
            if (err) return console.log('failed to update SW file', err);
        });
    });
}

if (process.env.NODE_ENV !== 'production') {
    updateSWWithId('-')

} else {
    fs.readFile('./.next/BUILD_ID', 'UTF-8', (error, buildId) => {
        if (error) {
            return console.log('failed to get build id, update SW failed!');
        }

        console.log(`build id is: ${buildId}`);
        updateSWWithId(buildId)
    })
}
