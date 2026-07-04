// ============================
// Tuljaai Hardware & Tibak Sinchan
// script.js
// ============================


// ---------- Sticky Navbar ----------

window.addEventListener("scroll", function () {

    const navbar = document.querySelector("nav");

    if (navbar) {
        if (window.scrollY > 80) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

});


// ---------- Explore Products Button ----------

const exploreBtn = document.querySelector(".btn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const products = document.querySelector(".products");

        if (products) {

            products.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}


// ---------- Search Products ----------

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = searchInput.value.toLowerCase();

        let products = document.querySelectorAll(".product-card");

        products.forEach(function (product) {

            let title = product.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

}


// ---------- Add To Cart ----------
// NOTE: fixed selector to ".product-btn" (it's an <a> tag in the HTML,
// not a <button>) and added preventDefault so href="#" doesn't jump
// the page to the top when clicked.

let cart = 0;

const cartButtons = document.querySelectorAll(".product-card .product-btn");

cartButtons.forEach(function (button) {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        cart++;

        alert("Product Added Successfully!\n\nItems in Cart : " + cart);

    });

});


// ---------- Scroll Animation ----------

const cards = document.querySelectorAll(".category-card, .product-card");

window.addEventListener("scroll", function () {

    cards.forEach(function (card) {

        let position = card.getBoundingClientRect().top;

        let screen = window.innerHeight;

        if (position < screen - 100) {

            card.classList.add("show");

        }

    });

});

// Run once on load too, so cards already in view show immediately
window.dispatchEvent(new Event("scroll"));


// ============================
// Back To Top Button
// ============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ============================
// Mobile Menu
// ============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


// ============================
// Hero Auto Slider
// ============================
// NOTE: This is the ONLY slider script now. A duplicate inline
// slider script that was in index.html has been removed so two
// timers aren't running at once and fighting each other.

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    function changeSlide() {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }

    // Change every 3 seconds
    setInterval(changeSlide, 3000);

}