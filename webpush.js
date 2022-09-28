let webpush = require('web-push');

// ********************
let vapidKeys = {
    publicKey: 'BAWwzaQSWnr902LMsGhy9RIsCDOA2X1t2AJ1qjU0vtDAQCsu_oKGuLtE-vOxl4y1sfP1BNwTIQVnoXBCFPdTAHo',
    privateKey: 'A65QuFO6sXwCp13C1lgp70GqYZ9dueAcV6nDQKPM6HA'
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
