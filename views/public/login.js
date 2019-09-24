let mainCont = document.querySelector(".main-container");
let submitLogin = document.querySelector(".login-form");
let submitRegister;
let registerBtn = document.querySelector(".login-button-register");
let regForm = document.querySelector(".register-form");

// if (
//       regPasswordInput.value === "" ||
//       regPasswordRepInput.value === "" ||
//       regPasswordInput.value != regPasswordRepInput.value
//     ) {
//       event.preventDefault();
//     }

// submitLogin.addEventListener("submit", e => {
//   if (username.value === "" || password.value === "") {
//     event.preventDefault();
//   }
// });

mainCont.addEventListener("keydown", e => {
  var key = e.which || e.keyCode;
  if (key === 13) {
    event.preventDefault();
  }
});

mainCont.addEventListener("click", e => {
  if (e.target.classList.contains("login-button-submit")) {
    fetch("/main", {
      method: "POST"
    })
      .then(response => response.text())
      .then(result => {
        return result;
      });
  }
});

mainCont.addEventListener("click", e => {
  fetch("/check", { method: "GET" })
    .then(res => res.text())
    .then(res => {
      console.log(res);
    });
});
// mainCont.addEventListener("click", e => {
//   if (e.target.classList.contains("login-button-submit")) {
//     fetch("/main", {
//       method: "POST"
//     })
//       .then(response => response.text())
//       .then(result => {
//         return result;
//       });
//   }
// });

mainCont.addEventListener("click", e => {
  if (e.target.classList.contains("login-button-register")) {
    let logincontainer = document.querySelector(".login-container");
    logincontainer.classList.add("close-animation");

    console.log("test");
    setTimeout(() => {
      fetch("/regform", {
        method: "GET"
      })
        .then(response => response.text())
        .then(result => {
          mainCont.innerHTML = result;
          if (result) {
            let regcontainer = document.querySelector(".register-container");
            regcontainer.classList.add("open-animation");
            setTimeout(e => {
              regcontainer.classList.remove("open-animation");
            }, 900);
          }
        });
    }, 700);
  }
});

mainCont.addEventListener("click", e => {
  if (e.target.classList.contains("closeBtn")) {
    let regcontainer = document.querySelector(".register-container");
    regcontainer.classList.add("close-animation");
    // regCont.classList.add("close-animation");
    // setTimeout(e => {
    //   regCont.remove();
    // }, 900);
    setTimeout(e => {
      fetch("/loginform", {
        method: "GET"
      })
        .then(response => response.text())
        .then(result => {
          mainCont.innerHTML = result;
          if (result) {
            let logincontainer = document.querySelector(".login-container");
            logincontainer.classList.add("open-animation");
            setTimeout(e => {
              logincontainer.classList.remove("open-animation");
            }, 900);
          }
        });
    }, 700);
  }
});

mainCont.addEventListener("click", e => {
  let reguser = document.querySelector("#reguser");
  let regemail = document.querySelector("#regemail");
  let regpassword = document.querySelector("#regpassword");
  let regpasswordrep = document.querySelector("#regpasswordrep");

  if (e.target.classList.contains("regSubmitBtn")) {
    if (
      reguser.value === "" ||
      regemail.value === "" ||
      regpassword.value === "" ||
      regpasswordrep.value === "" ||
      regpassword.value != regpasswordrep.value
    ) {
      event.preventDefault();
    } else {
      fetch("/", {
        method: "POST"
      })
        .then(response => response.text())
        .then(result => {
          return result;
        });
    }
  }
});

// registerBtn.addEventListener("click", e => {
//   submitRegister = document.querySelector(".register-form");
// });

// registerBtn.addEventListener("click", e => {
//   fetch("/regform", {
//     method: "GET"
//   })
//     .then(response => response.text())
//     .then(result => (mainCont.innerHTML = result));
// });

// regCont.classList.add("open-animation");

// setTimeout(e => {
//   regCont.classList.remove("open-animation");
// }, 1000);

// let regForm = document.createElement("form");
// regForm.classList.add("login-item");
// regForm.classList.add("register-form");
// regForm.setAttribute("method", "POST");
// regForm.setAttribute("action", "/");

// regForm.addEventListener("keydown", e => {
//   var key = e.which || e.keyCode;
//   if (key === 13) {
//     event.preventDefault();
//   }
// });

//   let regUserCont = document.createElement("div");
//   regForm.appendChild(regUserCont);
//   regUserCont.classList.add("reg-item");
//   let regUserLabel = document.createElement("label");
//   regUserLabel.setAttribute("for", "reguser");
//   regUserLabel.innerText = "Username";
//   let regUserInput = document.createElement("input");
//   regUserInput.setAttribute("type", "text");
//   regUserInput.setAttribute("id", "reguser");
//   regUserInput.setAttribute("name", "reguser");

//   regUserCont.appendChild(regUserLabel);
//   regUserCont.appendChild(regUserInput);

//   let regEmailCont = document.createElement("div");
//   regForm.appendChild(regEmailCont);
//   regEmailCont.classList.add("reg-item");
//   let regEmailLabel = document.createElement("label");
//   regEmailLabel.setAttribute("for", "regemail");
//   regEmailLabel.innerText = "Email";
//   let regEmailInput = document.createElement("input");
//   regEmailInput.setAttribute("type", "email");
//   regEmailInput.setAttribute("id", "regemail");
//   regEmailInput.setAttribute("name", "regemail");

//   regEmailCont.appendChild(regEmailLabel);
//   regEmailCont.appendChild(regEmailInput);

//   let regPasswordCont = document.createElement("div");
//   regForm.appendChild(regPasswordCont);
//   regPasswordCont.classList.add("reg-item");
//   let regPasswordLabel = document.createElement("label");
//   regPasswordLabel.setAttribute("for", "regpassword");
//   regPasswordLabel.innerText = "Password";
//   let regPasswordInput = document.createElement("input");
//   regPasswordInput.setAttribute("type", "password");
//   regPasswordInput.setAttribute("id", "regpassword");
//   regPasswordInput.setAttribute("name", "regpassword");

//   regPasswordCont.appendChild(regPasswordLabel);
//   regPasswordCont.appendChild(regPasswordInput);

//   let regPasswordRepCont = document.createElement("div");
//   regForm.appendChild(regPasswordRepCont);
//   regPasswordRepCont.classList.add("reg-item");
//   let regPasswordRepLabel = document.createElement("label");
//   regPasswordRepLabel.setAttribute("for", "regpasswordrep");
//   regPasswordRepLabel.innerText = "Repeat password";
//   let regPasswordRepInput = document.createElement("input");
//   regPasswordRepInput.setAttribute("type", "password");
//   regPasswordRepInput.setAttribute("id", "regpasswordrep");
//   regPasswordRepInput.setAttribute("name", "regpasswordrep");

//   regPasswordRepCont.appendChild(regPasswordRepLabel);
//   regPasswordRepCont.appendChild(regPasswordRepInput);

//   let regSubmitBtn = document.createElement("button");
//   regForm.appendChild(regSubmitBtn);
//   regSubmitBtn.setAttribute("type", "submit");
//   regSubmitBtn.setAttribute("id", "regSubmit");
//   regSubmitBtn.setAttribute("name", "regSubmit");
//   regSubmitBtn.classList.add("regSubmitBtn");
//   regSubmitBtn.classList.add("login-button");
//   regSubmitBtn.classList.add("reg-item");
//   regSubmitBtn.innerText = "Finish";

//   regSubmitBtn.addEventListener("click", e => {
//     if (
//       regPasswordInput.value === "" ||
//       regPasswordRepInput.value === "" ||
//       regPasswordInput.value != regPasswordRepInput.value
//     ) {
//       event.preventDefault();
//     }
//   });

//   let closeBtn = document.createElement("div");
//   closeBtn.classList.add("closeBtn");
//   closeBtn.classList.add("fas");
//   closeBtn.classList.add("fa-times");

//   regCont.appendChild(regForm);
//   regForm.appendChild(closeBtn);

//   mainCont.insertBefore(regCont, loginCont);
//   console.log("register");
// });
