const toggle = document.querySelector(".toggle");
const confirmToggle = document.querySelector(".toggle1");
let x = document.getElementsByClassName("hide")[0];
let y = document.getElementsByClassName("hide")[1];
const eye = document.querySelector(".eye");
const eye1 = document.querySelector(".eye1");

toggle.addEventListener("click", () => {
  if (x.type === "password") {
    x.type = "text";
    eye.innerHTML = "visibility";
  } else {
    x.type = "password";
    eye.innerHTML = "visibility_off";
  }
});

confirmToggle.addEventListener("click", () => {
  if (y.type === "password") {
    y.type = "text";
    eye1.innerHTML = "visibility";
  } else {
    y.type = "password";
    eye1.innerHTML = "visibility_off";
  }
});
