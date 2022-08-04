let topic = document.querySelector("#choose");
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let mess = document.querySelector("#message");
let error = document.querySelectorAll(".error");
reg_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
      return false;
    } else {
      error[0].innerHTML = "";
    }
    //   username
    if (username.value == "") {
      error_m(error[1]);
      return false;
    } else {
      error[1].innerHTML = "";
    }
    //   email
    if (email.value == "") {
      error_m(error[2]);
      return false;
    } else if (!reg_email.test(email.value)) {
      error[2].innerHTML = "sai định dạng";
      return false;
    } else {
      error[2].innerHTML = "";
    }
    //   mess
    if (mess.value == "") {
      error_m(error[3]);
      return false;
    } else {
      error[3].innerHTML = "";
    }
  }
}

function error_m(e) {
  e.innerHTML = "dữ liệu chưa được nhập";
}
