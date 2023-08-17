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

// close modal event listener
modalClose.addEventListener("click", closeModal);

// submit modal
modalSubmit.addEventListener("click", e => {
  e.preventDefault();
  if (validateModal()) {
    showConfirmation();
  }
})

// add input event listener
document.querySelectorAll("input").forEach(element => {
  element.addEventListener("blur", e => {
    e.target.reportValidity();
  })
});

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
  let modalValidated = true;
  document.querySelectorAll("input").forEach(element => {
    if(!element.checkValidity()) {
      modalValidated = false;
      element.reportValidity();
    }
  });
  return modalValidated;
}

// show confirmation function
function showConfirmation() {
  modalForm.style.display = "none";
  modalConfirmation.style.display = "flex";
}
