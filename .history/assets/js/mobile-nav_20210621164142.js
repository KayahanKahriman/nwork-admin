const mobile_nav = document.querySelector("#mobile-nav");
const mobile_nav_parent_ul = mobile_nav.querySelectorAll("#mobile-nav>ul");
const mobile_nav_child_ul = mobile_nav.querySelectorAll("#mobile-nav>ul>li>ul");
const mobile_nav_parent_li_a = mobile_nav.querySelectorAll(
  "#mobile-nav>ul>li>a"
);
const toggle_nav = document.getElementById("toggle-button");
const nav_transition_effect = document.querySelector(".nav-transition-effect");

/** Morph start */

let nav_transition = [
  {
    d: "M1080,1820C1055.24,1803.33 975.323,1842.95 931.444,1820C876,1791 810.58,1847.14 760.466,1820C694,1784 585,1781 488.205,1820C414.46,1849.71 309.053,1823.17 249.686,1820C210.006,1817.88 171.737,1801 132,1801C90.386,1801 22,1800.17 0,1820C-22,1839.83 0,1920 0,1920L1080,1920C1080,1920 1104.76,1836.67 1080,1820Z",
  },
  {
    d: "M1056,743C1031.24,726.333 900.879,898.951 857,876C801.556,847 743.114,1286.14 693,1259C626.534,1223 577.795,1514 481,1553C407.254,1582.71 340.368,1363.17 281,1360C241.32,1357.88 181.737,999 142,999C100.386,999 -41,1521.17 -63,1541C-85,1560.83 0,1920 0,1920L1080,1920C1080,1920 1080.76,759.667 1056,743Z",
  },
  {
    d: "M1075,6C1050.24,-10.667 852.879,-65.049 809,-88C753.556,-117 721.114,-12.857 671,-40C604.534,-76 498.795,-81 402,-42C328.254,-12.287 277.368,-24.833 218,-28C178.32,-30.117 94.737,-20 55,-20C13.386,-20 -2,-18.833 -24,1C-46,20.833 0,1920 0,1920L1080,1920C1080,1920 1099.76,22.667 1075,6Z",
  },
];

const start_transition = anime({
  targets: ".transition-path",
  d: [
    {
      value: nav_transition[0].d,
    },
    {
      value: nav_transition[1].d,
    },
    {
      value: nav_transition[2].d,
    },
  ],
  duration: 1000,
  direction: "normal",
  autoplay: false,
  easing: "linear",
  elasticity: 500,
  loop: false,
});

/** Morph end */

toggle_nav.addEventListener("click", () => {
  start_transition.play();
  nav_transition_effect.classList.remove("d-none");
  nav_transition_effect.style.zIndex = 5;

  mobile_nav.classList.toggle("show-mobile-nav");

  start_transition.finished.then(() => {
    start_transition.reverse();
  });
});

Array.from(mobile_nav_parent_li_a).map((e) =>
  e.addEventListener("touchstart", function () {
    Array.from(mobile_nav_parent_li_a).map((a) =>
      a.classList.remove("mobil-nav-active")
    );
    Array.from(mobile_nav_child_ul).map((ul) =>
      ul.classList.remove("push-nav")
    );
    if (e.nextElementSibling) {
      e.nextElementSibling.classList.add("push-nav");
    }
    e.classList.add("mobil-nav-active");
  })
);
