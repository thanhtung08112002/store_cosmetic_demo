let topic = document.querySelector("#choose");
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let mess = document.querySelector("#message");
let error = document.querySelectorAll(".error");
let username_login = document.querySelector("#username");
let password_login = document.querySelector("#password");
let username_register = document.querySelector("#username_register");
let password_register = document.querySelector("#password_register");
let email_register = document.querySelector("#email_register");
let cfpassword_register = document.querySelector("#cfpassword_register");

let reg_pass = /^[A-Z]{1}([\w\.!@#$&]*){5,}$/;
let reg_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let flag = true;

function validate() {
  if (
    topic.value == "" &&
    username.value == "" &&
    email.value == "" &&
    mess.value == ""
  ) {
    error_m(error[0]);
    error_m(error[1]);
    error_m(error[2]);
    error_m(error[3]);
    return false;
  } else {
    // topic
    if (topic.value == "") {
      error_m(error[0]);
      flag = false;
    } else {
      error[0].innerHTML = "";
      flag = true;
    }
    //   username
    if (username.value == "") {
      error_m(error[1]);
      flag = false;
    } else {
      error[1].innerHTML = "";
      flag = true;
    }
    //   email
    if (email.value == "") {
      error_m(error[2]);
      flag = false;
    } else if (!reg_email.test(email.value)) {
      error[2].innerHTML = "email false";
      flag = false;
    } else {
      error[2].innerHTML = "";
      flag = true;
    }
    //   mess
    if (mess.value == "") {
      error_m(error[3]);
      flag = false;
    } else {
      error[3].innerHTML = "";
      flag = true;
    }
    return flag;
  }
}

function error_m(e) {
  e.innerHTML = "empty information";
}
function unError_m(e) {
  e.innerHTML = "";
}

topic.addEventListener("change", function () {
  if (topic.value == "") {
    error_m(error[0]);
  } else {
    unError_m(error[0]);
  }
});

function onin(e, num) {
  if (e.value == "") {
    error_m(error[num]);
  } else {
    console.log(e.value);
    unError_m(error[num]);
  }
}

function validate_login() {
  if (username_login.value == "" && password_login.value == "") {
    error_m(error[0]);
    error_m(error[1]);
    return false;
  } else {
    //   username
    if (username_login.value == "") {
      error_m(error[0]);
      flag = false;
    } else {
      error[0].innerHTML = "";
      flag = true;
    }
    //   pass
    if (password_login.value == "") {
      error_m(error[1]);
      flag = false;
    } else {
      error[1].innerHTML = "";
      flag = true;
    }
    return flag;
  }
}

function validate_register() {
  if (
    username_register.value == "" &&
    password_register.value == "" &&
    email_register.value == "" &&
    cfpassword_register.value == ""
  ) {
    error_m(error[0]);
    error_m(error[1]);
    error_m(error[2]);
    error_m(error[3]);
    return false;
  } else {
    //   username
    if (username_register.value == "") {
      error_m(error[0]);
      flag = false;
    } else {
      error[0].innerHTML = "";
      flag = true;
    }
    //   pass
    if (password_register.value == "") {
      error_m(error[1]);
      flag = false;
    } else if (!reg_pass.test(password_register.value)) {
      error[1].innerHTML = "pass false";
      flag = false;
    } else {
      error[1].innerHTML = "";
      flag = true;
    }
    //   cfpass
    if (cfpassword_register.value == "") {
      error_m(error[2]);
      flag = false;
    } else if (cfpassword_register.value != password_register.value) {
      error[2].innerHTML = "confirm pass isn't same";
      flag = false;
    } else {
      error[2].innerHTML = "";
      flag = true;
    }
    //email
    if (email_register.value == "") {
      error_m(error[3]);
      flag = false;
    } else if (!reg_email.test(email_register.value)) {
      error[3].innerHTML = "email false";
      flag = false;
    } else {
      error[3].innerHTML = "";
      flag = true;
    }
    return flag;
  }
}
