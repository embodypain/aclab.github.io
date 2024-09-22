const sidebar = document.querySelector(".sideBar");
const menuButton = document.querySelector(".menu");
const mriLink = document.querySelector(".MRILink");
const exerciseLink = document.querySelector(".exerciseLink");
const mriSection = document.querySelector(".MRIContainer");
const exerciseSection = document.querySelector(".exerciseContainer");
const submitButton = document.querySelector(".submitButton");


submitButton.addEventListener("click", function (event) {
  invalidInputText = document.getElementById("invalidInput");
  isSuccessful = invalidInputText[0];
  const templateParams = {
    from_name: document.querySelector(".name").value,
    from_email: document.querySelector(".email").value,
    from_phone: document.querySelector(".phone").value,
    message: document.querySelector(".message").value,
  };
  validationTuple = validate();
  if (isSuccessful) {
    console.log(templateParams);
    //    sendEmail();
    invalidInputText.style.color = "#00719B";
  }
  console.log(validationTuple[1]);
  invalidInputText.textContent = validationTuple[1];
  invalidInputText.style.color = "#f4585a";
});

function sendEmail() {
  return;
}

function validate() {
  const name = document.querySelector(".name").value.trim();
  const email = document.querySelector(".email").value.trim();
  const phone = document.querySelector(".phone").value.trim();
  const message = document.querySelector(".message").value.trim();

  if (!name) {
    return [false, "Name is required."];
  } else if (!isValidName(name)) {
    return [false, "Name must contain only alphabetic characters."];
  }

  if (!email) {
    return [false, "Email is required."];
  } else if (!validateEmail(email)) {
    return [false, "Please enter a valid email address."];
  }

  if (phone && !validatePhone(phone)) {
    return [
      false,
      "Please enter a valid phone number (digits only, 10-15 characters).",
    ];
  }

  if (!message) {
    return [false, "Message is required."];
  }

  return [true, "success"];
}

function isValidName(name) {
  const re = /^[A-Za-z\s]+$/;
  return re.test(name);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\d{10,15}$/;
  return re.test(phone);
}
