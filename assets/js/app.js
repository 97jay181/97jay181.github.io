const themeButton = document.querySelector(".theme-button");

themeButton?.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");
});
