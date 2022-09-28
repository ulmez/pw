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
    endpoint: 'https://fcm.googleapis.com/fcm/send/cx3DNKxvOFE:APA91bEv-gwuWGBBJttUlmRy5GSd3k9ldmO3mOfjbAXgdei8OBEmQwVdSzGFI4RXwvQG7QGnPwyx0wPwmSHEmmtI3D9ok66In7CWJOl5rmnH1nQJujCqycWrk5-hpGGAXQs1KsNBx9s1',
    expirationTime: null,
    keys: {
        p256dh: 'BG1LHt8j8XLxr1PgnVhl2ar-0lsDWFFuvbNT-2VZrjl7A1l1TEtnA6A4cbe5qDtYOWhfJWnA-v9I3cwaQ_2Nl3E',
        auth: '-dHOyn4Avk4lq5SkqqmHKg'
    }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
// ********************

// ********************
// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);
// ********************
