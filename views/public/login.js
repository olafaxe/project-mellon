let mainCont = document.querySelector(".main-container");
let loginCont = document.querySelector(".login-container");
let submitLogin = document.querySelector(".login-form");
let submitRegister;
let registerBtn = document.querySelector(".login-button-register");

submitLogin.addEventListener("submit", e => {
  if (username.value === "" || password.value === "") {
    event.preventDefault();
  } else {
    console.log("logging in...");
  }
});

registerBtn.addEventListener("click", e => {
  let regCont = document.createElement("div");
  regCont.classList.add("register-container");
  regCont.classList.add("open-animation");
  setTimeout(e => {
    regCont.classList.remove("open-animation");
  }, 1000);

  let regForm = document.createElement("form");
  regForm.classList.add("login-item");
  regForm.classList.add("register-form");
  regForm.setAttribute("method", "POST");
  regForm.setAttribute("action", "/");

  let regUserCont = document.createElement("div");
  regForm.appendChild(regUserCont);
  let regUserLabel = document.createElement("label");
  regUserLabel.setAttribute("for", "reguser");
  regUserLabel.innerText = "Username";
  let regUserInput = document.createElement("input");
  regUserInput.setAttribute("type", "text");
  regUserInput.setAttribute("id", "reguser");
  regUserInput.setAttribute("name", "reguser");

  regUserCont.appendChild(regUserLabel);
  regUserCont.appendChild(regUserInput);

  let regEmailCont = document.createElement("div");
  regForm.appendChild(regEmailCont);
  let regEmailLabel = document.createElement("label");
  regEmailLabel.setAttribute("for", "regemail");
  regEmailLabel.innerText = "Email";
  let regEmailInput = document.createElement("input");
  regEmailInput.setAttribute("type", "email");
  regEmailInput.setAttribute("id", "regemail");
  regEmailInput.setAttribute("name", "regemail");

  regEmailCont.appendChild(regEmailLabel);
  regEmailCont.appendChild(regEmailInput);

  let regPasswordCont = document.createElement("div");
  regForm.appendChild(regPasswordCont);
  let regPasswordLabel = document.createElement("label");
  regPasswordLabel.setAttribute("for", "regpassword");
  regPasswordLabel.innerText = "Password";
  let regPasswordInput = document.createElement("input");
  regPasswordInput.setAttribute("type", "password");
  regPasswordInput.setAttribute("id", "regpassword");
  regPasswordInput.setAttribute("name", "regpassword");

  regPasswordCont.appendChild(regPasswordLabel);
  regPasswordCont.appendChild(regPasswordInput);

  let regPasswordRepCont = document.createElement("div");
  regForm.appendChild(regPasswordRepCont);
  let regPasswordRepLabel = document.createElement("label");
  regPasswordRepLabel.setAttribute("for", "regpasswordrep");
  regPasswordRepLabel.innerText = "Repeat password";
  let regPasswordRepInput = document.createElement("input");
  regPasswordRepInput.setAttribute("type", "password");
  regPasswordRepInput.setAttribute("id", "regpasswordrep");
  regPasswordRepInput.setAttribute("name", "regpasswordrep");

  regPasswordRepCont.appendChild(regPasswordRepLabel);
  regPasswordRepCont.appendChild(regPasswordRepInput);

  let regSubmitBtn = document.createElement("button");
  regForm.appendChild(regSubmitBtn);
  regSubmitBtn.setAttribute("type", "submit");
  regSubmitBtn.setAttribute("id", "regSubmit");
  regSubmitBtn.setAttribute("name", "regSubmit");
  regSubmitBtn.classList.add("regSubmitBtn");
  regSubmitBtn.innerText = "Finish";

  let closeBtn = document.createElement("div");
  closeBtn.classList.add("closeBtn");
  closeBtn.classList.add("fas");
  closeBtn.classList.add("fa-times");

  regCont.appendChild(regForm);
  regForm.appendChild(closeBtn);

  mainCont.insertBefore(regCont, loginCont);
  console.log("register");
});

mainCont.addEventListener("click", e => {
  let regCont = document.querySelector(".register-container");
  if (e.target.classList.contains("closeBtn")) {
    regCont.classList.add("close-animation");
    setTimeout(e => {
      regCont.remove();
    }, 900);
  }
});

registerBtn.addEventListener("click", e => {
  submitRegister = document.querySelector(".register-form");
});

mainCont.addEventListener("click", e => {
  if (e.target.classList.contains("regSubmitBtn")) {
    submitRegister.addEventListener("submit", e => {
      //   if (
      //     reguser.value === "" ||
      //     regemail.value === "" ||
      //     regpassword.value === "" ||
      //     regpasswordrep.value === ""
      //   ) {
      //     event.preventDefault();
      //   } else {
      //     console.log("registering...");
      //   }
    });
  }
});
