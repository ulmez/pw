self.addEventListener('push', () => {
    self.registration.showNotification('Hello world!', {
        body: 'Notified by Traversy Media',
        icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    });
});
