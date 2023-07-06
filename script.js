"use strict";

const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  mobileNav.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  mobileNav.classList.add("hidden");
});
