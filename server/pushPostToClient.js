const webpush = require('web-push');
// VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();
const applicationServerPublicKey = 'BOy_M1QNP4M2GWL4ez0fx9pUjP0iHOpKnc2Z199ISspmUMIq7EAqcwlc-Q2EYWbbvgFRm2CbN3Ffsd03f876z4U'

webpush.setGCMAPIKey(process.env.GKEY);
webpush.setVapidDetails(
    'mailto:lanzhiping6@gmail.com',
    // vapidKeys.publicKey,
    applicationServerPublicKey,
    process.env.PKEY,
);

// This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

const subscriptions = []

module.exports.addSubscription = (req, res) => {
    const sub = req.body;
    const id = sub.keys.auth
    const subIds = subscriptions.map(subscription => subscription.keys.auth)

    if (!subIds.includes(id)) {
        subscriptions.push(sub)
    }
    res.end();
}

module.exports.pushPostToClient = (post) => {
    subscriptions.forEach(sub => {
        console.log(`push message to ${sub.endpoint}`)
        webpush
            .sendNotification(sub, `${post.name}: ${post.title}`)
            .catch(error => {
                console.log('message push failed', error)
            });
    });
}
