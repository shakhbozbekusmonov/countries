const elBody = document.querySelector("body");
const elThemeBtn = document.querySelector(".site-header__btn");

elThemeBtn.addEventListener("click", () => {
    elBody.classList.toggle("theme-dark");
    elThemeBtn.classList.toggle("site-header__dark-btn");
});
