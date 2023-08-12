"use strict";

//Menu breadcrumb
const toggle = document.querySelector(".breadcrumb");
const nav = document.querySelector(".navigation");
const main = document.querySelector("main");

toggle.addEventListener("click", function () {
  nav.classList.toggle("active");
  main.classList.toggle("active");
});
