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
})

// input event
document.querySelectorAll("input").forEach(element => {
  element.addEventListener("blur", e => {
    f = e.target.parentNode;
    if (!e.target.checkValidity()) {
      f.setAttribute("data-error-visible", true);
      f.setAttribute("data-error", e.target.validationMessage);
    } else {
      f.setAttribute("data-error-visible", false);
    }
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
  return [...formData].every(f => {
    const input = f.querySelector("input");
    if (!input.checkValidity()) {
      f.setAttribute("data-error-visible", true);
      f.setAttribute("data-error", input.validationMessage);
      return false;
    } else {
      f.setAttribute("data-error-visible", false);
      return true;
    }
  });
}

// show confirmation function
function showConfirmation() {
  modalForm.style.display = "none";
  modalConfirmation.style.display = "flex";
}
