// const hr = document.querySelector('.hr')
// const mn = document.querySelector('.mn')
// const sc = document.querySelector('.sc')

// setInterval(() => {

//     let day = new Date();
//     let hh = day.getHours() * 30;
//     let mm = day.getMinutes() * 6;
//     let ss = day.getSeconds() * 6;

//     hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
//     mn.style.transform = `rotateZ(${(mm)}deg)`;
//     sc.style.transform = `rotateZ(${(ss)}deg)`;
// });

const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

let prevSeconds = 0;

function updateClock() {
    const now = new Date();

    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() + minutes / 60;

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360;
    const hourDeg = (hours % 12 / 12) * 360;

    // Only apply the transition when there's a jump backward in seconds
    if (seconds < prevSeconds) {
        sc.style.transition = 'none';
    } else {
        sc.style.transition = 'transform 0.05s linear';
    }

    sc.style.transform = `rotateZ(${secondDeg}deg)`;
    mn.style.transform = `rotateZ(${minuteDeg}deg)`;
    hr.style.transform = `rotateZ(${hourDeg}deg)`;

    prevSeconds = seconds;

    requestAnimationFrame(updateClock);
}

updateClock();
