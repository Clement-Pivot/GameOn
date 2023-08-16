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
const modalConfirmationClose = document.querySelector(".close-confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event listener
modalClose.addEventListener("click", closeModal);
modalConfirmationClose.addEventListener("click", closeModal);

// submit modal
modalSubmit.addEventListener("click", e => {
  e.preventDefault();
  if (validateModal()) {
    showConfirmation();
  } else {
    showError();
  }
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal function
function closeModal() {
  modalbg.style.display = "none";
  modalForm.style.display = "block";
  modalConfirmation.style.display = "none";
}

// validate modal function
function validateModal() {
  return false;
}

// show confirmation function
function showConfirmation() {
  modalForm.style.display = "none";
  modalConfirmation.style.display = "flex";
}

// show where are errors in the form
function showError() {

}