self.addEventListener('push', () => {
    self.registration.showNotification('Hello world 1!', {
        body: 'Notified by Traversy Media',
        icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    });
});

self.addEventListener('push', () => {
    self.registration.showNotification('Hello world 2!', {
        body: 'Notified by Traversy Media',
        icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    });
});

self.addEventListener('push', () => {
    self.registration.showNotification('Hello world 3!', {
        body: 'Notified by Traversy Media',
        icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    });
});
