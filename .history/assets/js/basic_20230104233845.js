const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--hover");

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
});

function handleMouseEnter(e) {
    const { width, top, left } = e.target.getBoundingClientRect();
    navHover.style.width = width;
}
