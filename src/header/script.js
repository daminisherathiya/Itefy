function adjustHeaderBGOpacity(opacity) {
  const headerElement = document.querySelector(".header.header-transparent-to-black");
  if (opacity <= 9) {
    headerElement.style.backgroundColor = "hsla(215, 15%, 25%, .0" + opacity + ")";
  } else if (opacity <= 98) {
    headerElement.style.backgroundColor = "hsla(215, 15%, 25%, ." + opacity + ")";
  } else {
    headerElement.style.backgroundColor = "hsla(215, 15%, 25%, 0.98)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileToggleButtons = document.querySelectorAll(".header .main-menu .mobile-toggle-button");
  mobileToggleButtons.forEach(function (mobileToggleButton) {
    mobileToggleButton.addEventListener("click", function () {
      const navList = document.querySelector(".header .main-menu > ul");
      navList.classList.toggle("tw-left-0");
      navList.classList.toggle("tw-left-[100%]");
    });
  });

  if (document.querySelector(".header.header-transparent-to-black")) {
    adjustHeaderBGOpacity(window.scrollY);
    window.addEventListener("scroll", function () {
      adjustHeaderBGOpacity(window.scrollY);
    });
  }
});
