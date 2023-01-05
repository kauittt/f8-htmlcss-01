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
const loginBtn = document.querySelector(".header-nav-account__btn");
const signBtn = document.querySelector(".header-nav-account__link");
const modal = document.querySelector(".modal");
const modalLogIn = document.querySelector(".modal-logIn");
const modalSignUp = document.querySelector(".modal-signUp");

const tmpLogIn = ` <div class="modal">
<div class="modal-content modal-logIn">
    <div class="modal-content-name">
        <p class="modal-content-name__text">Log in</p>
        <i
            class="fa-solid fa-circle-xmark modal-content-name__icon"
        ></i>
    </div>

    <form class="modal-content-form">
        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input"
            placeholder="Email"
        />
        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input"
            placeholder="Password"
        />
        <a href="#!" class="modal-content-form__forgot">
            Forgot your password?
        </a>
        <p class="btn modal-content-form__btn">Log in</p>
    </form>

    <div class="modal-content-more">
        <a href="#!" class="modal-content-more__signUp">
            Dont have an account? Sign up
        </a>
    </div>
</div>

<div class="modal-content modal-signUp">
    <div class="modal-content-name">
        <p class="modal-content-name__text">Sign up</p>
        <i
            class="fa-solid fa-circle-xmark modal-content-name__icon"
        ></i>
    </div>

    <form class="modal-content-form">
        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input"
            placeholder="Email"
        />
        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input"
            placeholder="Password"
        />

        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input"
            placeholder="Confirm password"
        />
        <div class="modal-content-form-check">
            <p class="modal-content-form-check__item">
                * 8-12 chars
            </p>
            <p class="modal-content-form-check__item">
                * 1 uppercase
            </p>
            <p class="modal-content-form-check__item">* 1 number</p>
            <p class="modal-content-form-check__item">
                * 1 special character
            </p>
        </div>
        <div class="btn modal-content-form__btn">Sign up</div>
    </form>

    <div class="modal-content-more">
        <a href="#!" class="modal-content-more__signUp">
            Already have an account? Log in
        </a>
    </div>
</div>
</div>`;

const tmpSignUp = `<div class="modal-content modal-signUp">
<div class="modal-content-name">
    <p class="modal-content-name__text">Sign up</p>
    <i
        class="fa-solid fa-circle-xmark modal-content-name__icon"
    ></i>
</div>

<form class="modal-content-form">
    <input
        type="text"
        name=""
        id=""
        class="modal-content-form__input"
        placeholder="Email"
    />
    <input
        type="text"
        name=""
        id=""
        class="modal-content-form__input"
        placeholder="Password"
    />

    <input
        type="text"
        name=""
        id=""
        class="modal-content-form__input"
        placeholder="Confirm password"
    />
    <div class="modal-content-form-check">
        <p class="modal-content-form-check__item">
            * 8-12 chars
        </p>
        <p class="modal-content-form-check__item">
            * 1 uppercase
        </p>
        <p class="modal-content-form-check__item">* 1 number</p>
        <p class="modal-content-form-check__item">
            * 1 special character
        </p>
    </div>
    <div class="btn modal-content-form__btn">Sign up</div>
</form>

<div class="modal-content-more">
    <a href="#!" class="modal-content-more__signUp">
        Already have an account? Log in
    </a>
</div>
</div>`;

// loginBtn.addEventListener("click", function (e) {
//     modal.classList.add("modal--show");
//     modalLogIn.classList.add("modal-logIn--show");
// });

// signBtn.addEventListener("click", function (e) {
//     modal.classList.add("modal--show");
//     modalSignUp.classList.add("modal-signUp--show");
// });

loginBtn.addEventListener("click", function (e) {
    document.body.insertAdjacentHTML("beforeend", tmpLogIn);
});
