const card = document.getElementById('card');
const gloss = card.querySelector('.card__gloss');
const content = card.querySelector('.card__content');
const width = window.innerWidth;
const height = window.innerHeight;

function init() {
    bindMouse();

    light(350, -125);
    tilt(350, -125);
}

function bindMouse() {
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX - (width / 2);
        const y = event.clientY - (height / 2);

        light(x, y);
        tilt(x, y);
    });
}

function light(x, y) {
    const angle = (Math.atan2(y, x) * 180) / Math.PI - 90;

    gloss.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255,' + y / height * .9 + ') 0%, rgba(255, 255, 255, 0) 80%)';
}

function tilt(x, y) {
    const force = 80;
    const rx = (x / width) * force;
    const ry = (y / height) * -force;

    card.style.transform = 'rotateY(' + (rx) + 'deg) rotateX(' + (ry) + 'deg)';
}

init();
