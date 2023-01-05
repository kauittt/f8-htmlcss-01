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
//! MODAL - DISPLAY
const signInBtn = document.querySelector(".header-nav-account__btn");
const signUpBtn = document.querySelector(".header-nav-account__link");
const tmpSignIn = ` <div class="modal">
<div class="modal-content modal-logIn">
    <div class="modal-content-name">
        <p class="modal-content-name__text">Sign in</p>
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
        <div class="modal-content-form-icon">
            <i
                class="fa-solid fa-circle-xmark modal-content-form-icon__item modal-content-form-icon__item--time"
            ></i>
            <i
                class="fa-solid fa-circle-check modal-content-form-icon__item modal-content-form-icon__item--check"
            ></i>
        </div>
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
        <p class="btn modal-content-form__btn">Sign in</p>
    </form>

    <div class="modal-content-more">
        <a href="#!" class="modal-content-more__signIn">
            Don't have an account? Sign up
        </a>
    </div>
</div>
</div>`;
const tmpSignUp = `<div class="modal">
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
            class="modal-content-form__input email"
            placeholder="Email"
        />
        <div class="modal-content-form-email-check">
            <i
                class="fa-solid fa-circle-xmark modal-content-form-icon__item modal-content-form-icon__item--time"
            ></i>
            <i
                class="fa-solid fa-circle-check modal-content-form-icon__item modal-content-form-icon__item--check"
            ></i>
        </div>
        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input password"
            placeholder="Password"
        />
        <div class="modal-content-form-icon password-check">
            <i
                class="fa-solid fa-circle-check modal-content-form-icon__item modal-content-form-icon__item--check"
            ></i>
        </div>
        <div class="modal-content-form-check">
            <p class="modal-content-form-check__item">
                * 8-12 chars
            </p>
            <p class="modal-content-form-check__item">
                * 1 uppercase
            </p>
            <p class="modal-content-form-check__item">
                * 1 number
            </p>
            <p class="modal-content-form-check__item">
                * 1 special character
            </p>
        </div>
        <div class="btn modal-content-form__btn">Sign up</div>
    </form>

    <div class="modal-content-more">
        <a href="#!" class="modal-content-more__signUp">
            Already have an account? Sign in
        </a>
    </div>
</div>
</div>`;

signInBtn.addEventListener("click", function (e) {
    document.body.insertAdjacentHTML("beforeend", tmpSignIn);
});
signUpBtn.addEventListener("click", function (e) {
    document.body.insertAdjacentHTML("beforeend", tmpSignUp);
});
document.body.addEventListener("click", function (e) {
    if (e.target.matches(".modal")) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".modal-content-name__icon")) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    } else if (e.target.matches(".modal-content-more__signUp")) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
        signInBtn.click();
    } else if (e.target.matches(".modal-content-more__signIn")) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
        signUpBtn.click();
    } else if (e.target.matches(".email")) {
        const icons = document.querySelector(".modal-content-form-icon");
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        e.target.addEventListener("input", function (input) {
            if (!input.target.value) {
                icons.classList.remove("error");
                icons.classList.remove("valid");
                console.log("empty");
                return;
            }

            if (regex.test(input.target.value)) {
                icons.classList.add("valid");
                icons.classList.remove("error");
            } else {
                icons.classList.remove("valid");
                icons.classList.add("error");
            }
        });
    } else if (e.target.matches(".password")) {
        const items = document.querySelectorAll(
            ".modal-content-form-check__item"
        );

        e.target.addEventListener("input", function (E) {
            function handleValid(item, regex, input) {
                if (regex.test(input)) {
                    item.classList.add("valid");
                } else {
                    item.classList.remove("valid");
                }
            }

            if (E.target.value.length >= 8 && E.target.value.length <= 12) {
                items[0].classList.add("valid");
            } else {
                items[0].classList.remove("valid");
            }

            handleValid(items[1], /[A-Z]/, E.target.value);
            handleValid(items[2], /\d/, E.target.value);
            handleValid(
                items[3],
                /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
                E.target.value
            );
        });
    }
});