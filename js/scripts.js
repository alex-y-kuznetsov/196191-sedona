var link = document.querySelector(".open-form");
var popup = document.querySelector(".popup-form");
var datein = popup.querySelector("#date-in");
var dateout = popup.querySelector("#date-out");
var form = popup.querySelector("form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("popup-form-show")) {
    popup.classList.add("popup-form-hide");
    popup.classList.remove("popup-form-show");
  } else {
    popup.classList.add("popup-form-show");
    popup.classList.remove("popup-form-hide");
  };
  datein.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-form-show")) {
    popup.classList.remove("popup-form-show");
    popup.classList.add("popup-form-hide");
    popup.classList.remove("popup-form-error");
  }
}
});

form.addEventListener("submit", function(event) {
  if (!datein.value || !dateout.value) {
  event.preventDefault();
  popup.ckassList.add("popup-form-error");
}
});
