var c2_3E = document.getElementsByClassName("c2-3");
var c3_1E = document.getElementsByClassName("c3-1");
var overlayc2_3 = document.querySelector("#overlay_c2-3");
var overlayc3_1 = document.querySelector("#overlay_c3-1");
var content_on_overlayE = document.querySelectorAll(".content_on_overlay");
var btn_list_moblieE = document.querySelector("#btn_list_moblie");
var nav_overlayE = document.getElementsByClassName("nav_overlay");
out_img = function (E) {
  E.firstElementChild.nextElementSibling.style = " transition: ease-in 0.3s;";
  E.lastElementChild.style = " transition: ease-in 0.3s;";
};
out_in = function (E) {
  E.style = " transition: ease-in 0.3s;";
};

list_mobile = function (E) {
  E.parentElement.lastElementChild.previousElementSibling.style =
    "display:block;";
  E.parentElement.lastElementChild.style = "right:0;transition: ease 0.5s;";
};

list_mobile_hidden = function (E) {
  E.style = "display:none";
  E.nextElementSibling.style = "right:-100%;transition: ease-in 0.5s;";
};
list_mobile_hidden_btn = function (E) {
  E.parentElement.parentElement.style = "right:-100%;transition: ease-in 0.7s;";
  E.parentElement.parentElement.previousElementSibling.style = "display:none;";
};



