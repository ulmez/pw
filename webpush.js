let webpush = require('web-push');

// ********************
let vapidKeys = {
    publicKey: 'BKiaDTtzmTUggWqinNVXG_FUgtmfdIZFtDGLQ_bcmeacnv2JCUdwQ_-JiXxid-cPIw1N_pIit-XU4vQKqVHwk4E',
    privateKey: 'Lp_yXeoHfhc7AAv3YdloHrYW73HnfJIgMasdcSeb6Ds'
};

webpush.setVapidDetails(
    'mailto:ulmezz@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/eOSOzVSxREk:APA91bHTOWLUo2yQ6Eq4GX7sAtj2zDvSXo2d5QkOGJHPJPJNX1EI3m3mmd1rB62WQoaab3epQl6QBjz1jrmcqasHoi5O61q7bC0jICFQ0Y-R2eOXpSV_iqjGgk4nkW-j716TmIei6ZaG',
    expirationTime: null,
    keys: {
        p256dh: 'BPTN3_F5T-MDfacOf6IQVgl6uJhU6C95PLr4mTjD-UlJs6FUeYP7tA88TGdlXm7Ci8ZbZZrqGxo6k-HUPKX-Vrg',
        auth: 'wfIceds-q7f0EirqtS-upQ'
    }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
// ********************

// ********************
// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);
// ********************
