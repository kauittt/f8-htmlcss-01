const navItems = document.querySelectorAll(".header-nav-list__item");
console.log(navItems);

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
});

function handleMouseEnter(e) {
    const { width, top, left } = e.target.getBoundingClientRect();
    console.log("🚀 ~ file: basic.js:10 ~ handleMouseEnter ~ width", width);
}
