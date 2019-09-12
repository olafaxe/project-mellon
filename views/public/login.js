let submitform = document.querySelector(".login-form");

submitform.addEventListener("submit", e => {
  if (username.value === "" || password.value === "") {
    event.preventDefault();
  } else {
    console.log("logging in...");
  }
});
