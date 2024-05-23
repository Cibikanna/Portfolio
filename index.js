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
