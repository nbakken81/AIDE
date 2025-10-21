const monthNameEl = document.getElementById('month-name');
const yearEl = document.getElementById('year');
const daysEl = document.querySelector('.days');

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

monthNameEl.innerText = months[month];
yearEl.innerText = year;

const firstDayOfMonth = new Date(year, month, 1).getDay();
const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

let days = '';

for (let i = firstDayOfMonth; i > 0; i--) {
    days += `<div class="prev-month">${lastDateOfPrevMonth - i + 1}</div>`;
}

for (let i = 1; i <= lastDateOfMonth; i++) {
    if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}

const remainingDays = 42 - (firstDayOfMonth + lastDateOfMonth);

for (let i = 1; i <= remainingDays; i++) {
    days += `<div class="next-month">${i}</div>`;
}

daysEl.innerHTML = days;
