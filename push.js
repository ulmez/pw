let push = require('web-push');

// ********************
let vapidKeys = {
    publicKey: 'BAWwzaQSWnr902LMsGhy9RIsCDOA2X1t2AJ1qjU0vtDAQCsu_oKGuLtE-vOxl4y1sfP1BNwTIQVnoXBCFPdTAHo',
    privateKey: 'A65QuFO6sXwCp13C1lgp70GqYZ9dueAcV6nDQKPM6HA'
};

push.setVapidDetails('mailto:ulmezz@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');
// ********************

// ********************
// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);
// ********************
