//! HEADER
const navItems = document.querySelectorAll(".header-nav-list__item__link");
const navList = document.querySelector(".header-nav-list");
const navHover = document.querySelector(".header-nav-list__item--hover");
[...navItems].forEach((item) => {
    item.addEventListener("mouseover", handleMouseEnter);
});
[...navItems].forEach((item) => {
    item.addEventListener("mouseleave", function (e) {
        navHover.style.width = `0px`;
    });
});
function handleMouseEnter(e) {
    const { width } = e.target.getBoundingClientRect();
    navHover.style.width = `${width - 28}px`;
    navHover.style.left = `${e.target.offsetLeft + 14}px`;
    console.log(e.target);
}
//! SCROLL
function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const headerNav = document.querySelector(".header-nav");
const header = document.querySelector("#header");
window.addEventListener("scroll", debounceFn(handleWindowScroll, 25));
function handleWindowScroll(e) {
    if (window.pageYOffset > headerNav.offsetHeight) {
        headerNav.classList.add("header-nav--fixed");
        header.style.paddingTop = `${
            headerNav.offsetHeight + headerNav.style.paddingTop
        }px`;
    } else {
        headerNav.classList.remove("header-nav--fixed");
        header.style.paddingTop = `0px`;
    }
}
//! MODAL
const logIn = document.querySelector(".modal-logIn");
const signIn = document.querySelector(".modal-signIn");
