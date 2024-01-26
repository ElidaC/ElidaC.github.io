let button = document.querySelector(".button");
let colors = ["#614817", "#9e4d06", "#632f02", "#852d04", "#ad4b1d", "#543a2d", "#3d1a09", "#875832", "#874932", "#632b16"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);

 let blobs = document.querySelectorAll(".blob");
  let container = document.querySelector(".wrapper");
  // place our blobs randomly
  blobs.forEach(function (blob) {
    blob.style.right = (100 * Math.random()) + '%';
    blob.style.top = (100 * Math.random()) + '%';
  });
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("blob")) {
      event.target.remove();
    }
  });
