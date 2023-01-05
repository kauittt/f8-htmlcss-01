const navItems = document.querySelectorAll(".header-nav-list__item");
const navHover = document.querySelector(".header-nav-list__item--hover");
console.log("🚀 ~ file: basic.js:3 ~ navHover", navHover);
console.log(navItems);

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
});

function handleMouseEnter(e) {
    const { width, top, left } = e.target.getBoundingClientRect();
}
