let btn = document.querySelector("header .other");
let landing = document.querySelector(".landing");

btn.onclick = _ => document.querySelector(".mega").classList.toggle("megaActive");
landing.onclick = _ => document.querySelector(".mega").classList.remove("megaActive");

// count down events
let eventTime = new Date("oct 31, 2022 23:59:59").getTime();

let counter = setInterval( _ => {
  let nowTime = new Date().getTime();
  let timeDif = eventTime - nowTime;
  
  let da =  Math.floor(timeDif / (1000 * 60 * 60 * 24));
  document.querySelector(".da").innerHTML = da;
  if (da < 10) {
  document.querySelector(".da").innerHTML = `0${da}`;
  }
  let hou = Math.floor(timeDif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  document.querySelector(".hou").innerHTML = hou;
  if (hou < 10) {
  document.querySelector(".hou").innerHTML = `0${hou}`;
  }
  let min = Math.floor((timeDif % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".min").innerHTML = min;
  if (min < 10) {
  document.querySelector(".min").innerHTML = `0${min}`;
  }
  let sec = Math.floor((timeDif % (1000 * 60)) / 1000);
  document.querySelector(".sec").innerHTML = sec;
  if (sec < 10) {
  document.querySelector(".sec").innerHTML = `0${sec}`;
  }
}, 1000);

// progress lone
function prgFill() {
  let prgs = document.querySelectorAll(".prg");
  let our = document.querySelector(".our");
  if (window.scrollY >= our.offsetTop - 200) {
    prgs.forEach(e => e.style.width = e.dataset.fill);
  }
}

window.onscroll = _ => prgFill();

// Our Awesome Stats
let h1 = document.querySelectorAll(".stats .main-box .box h1");
let stats = document.querySelector(".stats");

function numRaise(el) {
  let goal = el.getAttribute("num");
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

let started = false;

window.addEventListener("scroll", _ => {
  if (window.scrollY >= stats.offsetTop - 200) {
    // if (started === true) {
    if (!started) {
      h1.forEach(e => numRaise(e));
    }
    started = true;
  }
});

// scroll to top
let div = document.createElement("div");
div.classList.add("scrollTop");
div.innerHTML = "up";
document.body.appendChild(div);

div.onclick = _ => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

window.addEventListener("scroll", _ => {
  if (window.scrollY > 300)  {
    div.classList.add("show");
  } else  {
    div.classList.remove("show");
  }
})