// Add Our Skills Progress Anumation
let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
};

// Add Latest Events Countdown Counter
// The End Of The Year to Countdown to
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let munites = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 *60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".munites").innerHTML = munites < 10 ? `0${munites}` : munites;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (document.querySelector(".days").innerHTML.length === 3) {
        document.querySelector(".days").style.marginLeft = "-7px";
    }    

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

// Add Stats Increase Numbers on Scrolling Animation
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false; // Function Started ? No 

window.addEventListener("scroll", function () {
    if (window.scrollY >= statsSection.offsetTop - 250) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}