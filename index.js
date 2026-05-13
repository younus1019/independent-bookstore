javascript
// ============================
// LUCIDE ICONS
// ============================

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
// LOGIN BUTTON
// ============================

const loginButton = document.querySelector(".login-btn");

if (loginButton) {

  loginButton.addEventListener("click", () => {

    alert("Login Feature Coming Soon!");

  });

}


// ============================
// RTL BUTTON
// ============================

const rtlButton = document.querySelector(".rtl-btn");

if (rtlButton) {

  rtlButton.addEventListener("click", () => {

    document.body.classList.toggle("rtl-mode");

  });

}


// ============================
// ADD TO CART BUTTONS
// ============================

const cartButtons = document.querySelectorAll(".book-card .primary-btn");

cartButtons.forEach((button) => {

  button.addEventListener("click", () => {

    alert("Book Added To Cart Successfully!");

  });

});


// ============================
// NEWSLETTER FORM
// ============================

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

  newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailInput = newsletterForm.querySelector("input");

    if (emailInput.value.trim() === "") {

      alert("Please Enter Your Email");

    } else {

      alert("Thank You For Subscribing!");

      newsletterForm.reset();

    }

  });

}


// ============================
// BUTTON HOVER EFFECT
// ============================

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";
    button.style.transition = "0.3s ease";

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
    card.style.transition = "0.3s ease";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 30px rgba(255,79,139,0.12)";

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

      header.style.background = "rgba(255,245,248,0.97)";
      header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.04)";

    }

  }

});


// ============================
// SCROLL TO TOP BUTTON
// ============================

const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {

  scrollTopBtn.addEventListener("click", (e) => {

    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}

