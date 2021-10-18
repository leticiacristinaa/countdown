import Countdown from "./countdown.js";

const timeTo = new Countdown("01 January 2022 06:00:00 GMT-0300");
const times = document.querySelectorAll("[data-time]");

function showTime() {
  times.forEach((time, index) => {
    time.innerHTML = timeTo.total[index];
  });
}
showTime();
setInterval(showTime, 1000);