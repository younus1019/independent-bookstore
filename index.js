// ============================
// LUCIDE ICONS
// ============================

lucide.createIcons();


// ============================
// DARK / LIGHT MODE
// ============================

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

  let dark = false;

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    dark = !dark;

    if(dark){

      themeToggle.innerHTML =
      '<i data-lucide="moon"></i>';

    }

    else{

      themeToggle.innerHTML =
      '<i data-lucide="sun"></i>';

    }

    lucide.createIcons();

  });

}


// ============================
// RTL MODE
// ============================

const rtlToggle = document.getElementById("rtl-toggle");

if(rtlToggle){

  rtlToggle.addEventListener("click", () => {

    if(document.body.style.direction === "rtl"){

      document.body.style.direction = "ltr";

    }

    else{

      document.body.style.direction = "rtl";

    }

  });

}


// ============================
// NEWSLETTER FORM
// ============================

const newsletterForm = document.querySelector(".newsletter form");

if(newsletterForm){

  newsletterForm.addEventListener("submit", function(event){

    event.preventDefault();

    const emailInput =
    newsletterForm.querySelector("input");

    if(emailInput.value.trim() === ""){

      alert("Please Enter Your Email");

    }

    else{

      alert("Thank You For Subscribing!");

      newsletterForm.reset();

    }

  });

}


// ============================
// SCROLL TO TOP
// ============================

const scrollTopBtn =
document.querySelector(".scroll-top");

if(scrollTopBtn){

  scrollTopBtn.addEventListener("click", (e) => {

    e.preventDefault();

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  });

}


// ============================
// HEADER SCROLL EFFECT
// ============================

window.addEventListener("scroll", () => {

  const header =
  document.querySelector(".header");

  if(header){

    if(window.scrollY > 50){

      header.style.background = "#ffffff";

      header.style.boxShadow =
      "0 4px 20px rgba(0,0,0,0.1)";

    }

    else{

      header.style.background =
      "rgba(255,245,248,0.96)";

      header.style.boxShadow =
      "0 2px 10px rgba(0,0,0,0.04)";
    }

  }

});