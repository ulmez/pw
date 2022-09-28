let push = require('web-push');

let vapidKeys = {
    publicKey: 'BGcNiUs1HK9Xi3KC_otPHL-mjzBdnT8aF7K1Xn-1DOOQF4EQG4MUVIENIKaWLU8KFj6iJxm_fH3o43MdvzRwakA',
    privateKey: 'nxit6PBvLyJrHtMIXXzmgSLVfgSqw_Z07pi0EbRy7Uw'
};

push.setVapidDetails('mailto:ulmezz@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);
