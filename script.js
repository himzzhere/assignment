const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#form");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username is required");
  }
  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (
    !emailValue
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    setErrorFor(email, "Invalid email");
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be atleast 8 characters");
  } else if (passwordValue.search(/[a-z]/) < 0) {
    setErrorFor(password, "Password must contain atleast one lowercase letter");
  } else if (passwordValue.search(/[A-Z]/) < 0) {
    setErrorFor(password, "Password must contain atleast one uppercase letter");
  } else if (passwordValue.search(/[?=.*!@#$%^&*]/) < 0) {
    setErrorFor(
      password,
      "Password must contain atleast one special character"
    );
  } else if (passwordValue.search(/[0-9]/) < 0) {
    setErrorFor(
      password,
      "Password must contain atleast one numeric-character"
    );
  }
}

function setErrorFor(input, message) {
  input.parentElement.children[2].innerHTML = message;

  setTimeout(() => {
    input.parentElement.children[2].innerHTML = "";
  }, 3000);
}
