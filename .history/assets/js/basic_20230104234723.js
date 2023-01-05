const navItems = document.querySelectorAll(".header-nav-list__item__link");
const navList = document.querySelector(".header-nav-list");
const navHover = document.querySelector(".header-nav-list__item--hover");

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
});

[...navItems].forEach((item) => {
    item.addEventListener("mouseleave", function (e) {
        navHover.style.width = `0px`;
    });
});
function handleMouseEnter(e) {
    const { width, top, left } = e.target.getBoundingClientRect();
    navHover.style.width = `${width}px`;
    navHover.style.left = `${e.target.offsetLeft}px`;
    // console.log(e.target.offsetLeft);
    // console.log(navList.offsetLeft);
}
