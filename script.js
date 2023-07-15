//hamburger
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".hamburger-icon");

btn.onclick = () => {
  nav.classList.toggle("open");
};

//copy right year
document.getElementById("current-year").innerHTML = new Date().getFullYear();
