


let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "img/dark.svg";
  } else {
    this.firstElementChild.src = "img/light.svg";
  }
  document.body.classList.toggle("light");
});