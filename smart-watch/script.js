function formatTimeUnit(timeUnit) {
    return String(timeUnit).padStart(2, '0');
}

function changeColor(color) {
    let strapArr = document.getElementsByClassName('watch');
    for (let i = 0; i < strapArr.length; i++) {
        strapArr[i].style.background = color;
    }
}

const today = new Date();
const curTime = formatTimeUnit(today.getHours()) + ":" + formatTimeUnit(today.getMinutes()) + ":" + formatTimeUnit(today.getSeconds());
document.getElementById('time').innerHTML = curTime;

setInterval(function () {
    const today = new Date();
    const curTime = formatTimeUnit(today.getHours()) + ":" + formatTimeUnit(today.getMinutes()) + ":" + formatTimeUnit(today.getSeconds());
    document.getElementById('time').innerHTML = curTime;
}, 1000);
