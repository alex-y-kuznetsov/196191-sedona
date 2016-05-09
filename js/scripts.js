var link = document.querySelector(".open-form");
var popup = document.querySelector(".popup-form");
var date = popup.querySelector("#date-in");

link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("popup-form-show")) {
    popup.classList.add("popup-form-hide");
    popup.classList.remove("popup-form-show");
  } else {
    popup.classList.add("popup-form-show");
    popup.classList.remove("popup-form-hide");
  };
  date.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-form-show")) {
    popup.classList.remove("popup-form-show");
  }
}
});
