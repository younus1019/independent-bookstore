lucide.createIcons();


// ============================
// THEME TOGGLE
// ============================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

  });

}


// ============================
// ADD TO CART BUTTON
// ============================

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach((button) => {

  button.addEventListener("click", () => {

    alert("Book Added To Cart Successfully!");

  });

});


// ============================
// NEWSLETTER FORM
// ============================

const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {

  newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailInput = document.getElementById("email");

    if (emailInput.value === "") {

      alert("Please Enter Your Email");

    } else {

      alert("Thank You For Subscribing!");

      newsletterForm.reset();

    }

  });

}


// ============================
// LOGIN BUTTON
// ============================

const loginButton = document.getElementById("login-btn");

if (loginButton) {

  loginButton.addEventListener("click", () => {

    alert("Login Feature Coming Soon!");

  });

}


// ============================
// GET STARTED BUTTON
// ============================

const startButton = document.getElementById("start-btn");

if (startButton) {

  startButton.addEventListener("click", () => {

    alert("Welcome To Independent Bookstore!");

  });

}


// ============================
// BUTTON HOVER EFFECT
// ============================

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";
    button.style.transition = "0.3s";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

  });

});


// ============================
// BOOK CARD HOVER EFFECT
// ============================

const bookCards = document.querySelectorAll(".book-card");

bookCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";
    card.style.transition = "0.3s";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

  });

});


// ============================
// HEADER SCROLL EFFECT
// ============================

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if (header) {

    if (window.scrollY > 50) {

      header.style.background = "#ffffff";
      header.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.1)";

    } else {

      header.style.background = "#ffffff";
      header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.05)";

    }

  }

});