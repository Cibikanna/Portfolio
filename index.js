const image = document.getElementById('i');

let position = 0;
let direction = 1;
const speed=1;
function bounce() {
    position += direction*speed;

    image.style.transform = `translateY(${position}px)`;
    image.style.transform = `translateX(${position}px)`;

    if (position >= 20 || position <= -20) {
        direction = -direction;
    }
    setTimeout(() => {
        requestAnimationFrame(bounce);
    }, 100);
}

bounce();
// script.js
document.getElementById('mskill').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('mproject').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('mhome').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
