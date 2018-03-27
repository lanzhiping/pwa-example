import fetch from 'isomorphic-unfetch'

const applicationServerPublicKey = 'BOy_M1QNP4M2GWL4ez0fx9pUjP0iHOpKnc2Z199ISspmUMIq7EAqcwlc-Q2EYWbbvgFRm2CbN3Ffsd03f876z4U'

function createSubOnServer(sub) {
    const headers = { 'Content-Type': 'application/json' }
    fetch('/subscription', { headers, method: 'POST', body: JSON.stringify(sub) })
}

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function subscribeUser(sw) {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);

    sw.pushManager
        .subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
        })
        .then(function(subscription) {
            console.log('[Service Worker] User is subscribed.', subscription);
            createSubOnServer(subscription)
        })
        .catch(function(err) {
            console.log('[Service Worker] Failed to subscribe the user: ', err);
        });
}

function getSubscription(sw) {
    sw.pushManager
        .getSubscription()
        .then((subscription) => {
            if (subscription) {
                console.log('[Service Worker] User IS subscribed', subscription)
                createSubOnServer(subscription)
            } else {
                console.log('[Service Worker] User is NOT subscribed. Now trying to subscribe')

                subscribeUser(sw);
            }
        })
}

export default () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((swReg) => {
                console.log('Service Worker Registered');

                if ('PushManager' in window) {
                    getSubscription(swReg)
                }
            });
    }
}
