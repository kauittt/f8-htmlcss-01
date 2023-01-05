const navItems = document.querySelectorAll(".header-nav-list__item");
console.log(navItems);

[...navItems].forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
});

function handleMouseEnter(e) {
    const { width, top, left } = e.target.getBoundingClientRect();
}
