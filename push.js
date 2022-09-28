let push = require('web-push');

// ********************
let vapidKeys = {
    publicKey: 'BAWwzaQSWnr902LMsGhy9RIsCDOA2X1t2AJ1qjU0vtDAQCsu_oKGuLtE-vOxl4y1sfP1BNwTIQVnoXBCFPdTAHo',
    privateKey: 'A65QuFO6sXwCp13C1lgp70GqYZ9dueAcV6nDQKPM6HA'
};

push.setVapidDetails('mailto:ulmezz@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cphKZWDobx0:APA91bELlqVyyD1GFXUXBzBrQObTKnkarMRjH5O3WjhxGg7C6x0pz5slzyRexExiL5ECU8QezfVDMtpldzfIY7LDfrtuqZb8KYgRTAJ4J1fsmOw8UvjpWOq2AzRL15hF32iLJyzvJEQ0',
    expirationTime: null,
    keys: {
        p256dh:'BI-A2prVynJ_Z4CtbEyVia_iXy4ZvoGGJsBaXTfIZ6cb6qfypUJ-6iGPhhHFVgbWIomn-FXv1Tkcph9JaIP5xgE',
        auth:'1hsQC-i2_qs7yL1qsEifKQ'
    }
};

push.sendNotification(sub, 'test message');
// ********************

// ********************
// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);
// ********************
