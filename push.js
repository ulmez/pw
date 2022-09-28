let push = require('web-push');

let vapidKeys = {
    publicKey: 'BHFVGLmr49ucXSO-nRj1xwSYkUz1H6GyNBzlY4HEvfZOi6_u0uZ76B06JRcuARGa-8KPZmuCFps5dpzjjDI5jdY',
    privateKey: '5uBNZd7E5qAw45_X_Q2nhRjikcVUxEPn2NzZgD2Eass'
};

push.setVapidDetails('mailto:ulmezz@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);
