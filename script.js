const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    eyes.forEach((eye, index) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = Math.min(rect.width / 4, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) / 3);

        const pupilX = distance * Math.cos(angle);
        const pupilY = distance * Math.sin(angle);

        pupils[index].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
