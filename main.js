function animation1() {
  let span = document.querySelectorAll(".our-skills .content span");
  if (span[0].getBoundingClientRect().bottom < window.innerHeight) {
    for (let i = 0; i < span.length; i++) {
      span[i].style.width = `${span[i].getAttribute("data-percent")}`;
    }
  }
}
addEventListener("scroll", animation1);

/* date */
setInterval(time, 1000);
function time() {
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let currentdate = new Date();
  let mydate = new Date(2022, 2, 31, 24, 0, 0);

  days.innerText = Math.floor(
    (mydate.getTime() - currentdate.getTime()) / 1000 / 60 / 60 / 24
  );
  hours.innerText = Math.floor(
    new Date(mydate.getTime() - currentdate.getTime()).getHours()
  );
  minutes.innerText = Math.floor(
    new Date(mydate.getTime() - currentdate.getTime()).getMinutes()
  );
  seconds.innerText = Math.floor(
    new Date(mydate.getTime() - currentdate.getTime()).getSeconds()
  );
}
time();
let mydate = new Date(2022, 2, 31, 22, 0, 0);
let testdate = new Date().getTime();

/*end date */

/* our awesome stats */
let scrolled = false;
let ourStats = document.querySelector(".our-stats");
window.onscroll = function animation2() {
  if (ourStats.getBoundingClientRect().y <= 200 && !scrolled) {
    let span = document.querySelectorAll(
      ".our-stats .content .box span:first-of-type"
    );

    function inter(a, b = 20) {
      let inter = setInterval(count, b);

      function count() {
        a.innerText = +a.innerText + 1;
        if (+a.innerText >= +a.getAttribute("data-stat")) {
          clearInterval(inter);
        }
      }
      scrolled = true;
    }
    inter(span[0]);
    inter(span[1]);
    inter(span[2]);
    inter(span[3], 5);
  }
};
