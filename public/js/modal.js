function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const modalSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".modal-confirmation");
const modalForm = document.querySelector(".modal-form");

// launch modal event
modalBtn.forEach(btn => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// submit modal
modalSubmit.addEventListener("mousedown", e => {
  e.preventDefault();
  if (validateModal()) {
    showConfirmation();
  }
});

// input event
document.querySelectorAll("input").forEach(element => {
  element.addEventListener(
    (element.type === "checkbox" || element.type === "radio") ? "change" : "blur",
    event => toggleData(element, event.target.parentNode));
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
  modalbg.animate([
    {
      opacity: 0,
      transform: "translateY(-150px)",
      display: "block",
    },{
      opacity: 1,
      transform: "translateY(0)",
      display: "block",
  }], {duration: 800, fill: "both" });
}

// close modal function
function closeModal() {
  modalbg.animate([{
    opacity: 0,
    transform: "translateY(-150px)",
    display: "none",
  }], {duration: 800, fill: "both" });
  modalForm.style.display = "block";
  modalConfirmation.style.display = "none";
}

// validate modal function
function validateModal() {
  return [...formData].every(field => toggleData(field.querySelector("input"), field));
}

// show/hide error message function
function toggleData(element, field) {
  if (!element.checkValidity()) {
    field.setAttribute("data-error-visible", true);
    field.setAttribute("data-error", element.validationMessage);
  } else {
    field.setAttribute("data-error-visible", false);
  }
}

// show confirmation function
function showConfirmation() {
  modalForm.style.display = "none";
  modalConfirmation.style.display = "flex";
}
