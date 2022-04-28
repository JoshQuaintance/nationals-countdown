const DateTime = luxon.DateTime;
const Duration = luxon.Duration;

const final = DateTime.local(2022, 5, 4, 6, 30);

const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const days = document.getElementById('days');

setInterval(() => {
    const dt = DateTime.now();
    const count = final.diff(dt, ['days', 'hours', 'minutes', 'seconds']).toObject();

    let dur = Duration.fromObject(count).values;

    days.textContent = '0' + dur.days;
    hours.textContent = dur.hours < 10 ? '0' + dur.hours : dur.hours;
    minutes.textContent = dur.minutes < 10 ? '0' + dur.minutes : dur.minutes;
    seconds.textContent = Math.floor(dur.seconds) < 10 ? '0' + Math.floor(dur.seconds) : Math.floor(dur.seconds);
}, 1000);
