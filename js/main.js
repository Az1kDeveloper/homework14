


let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "img/dark.svg";
  } else {
    this.firstElementChild.src = "img/light.svg";
  }
  document.body.classList.toggle("light");
});



window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    backtop.style.bottom = "50px";
  } else {
    backtop.style.bottom = "-50px";
  }
}