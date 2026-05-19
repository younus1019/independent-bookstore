document.addEventListener("DOMContentLoaded", () => {

  // ============================
  // LOAD NAVBAR
  // ============================

  fetch("../components/navbar.html")
    .then(response => response.text())
    .then(data => {

      const navbar = document.getElementById("navbar");

      if(navbar){
        navbar.innerHTML = data;
      }

      setupThemeToggle();
      setupRTLToggle();

    });


  // ============================
  // LOAD FOOTER
  // ============================

  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => {

      const footer = document.getElementById("footer");

      if(footer){
        footer.innerHTML = data;
      }

      setupScrollTop();

    });

});


// ============================
// DARK / LIGHT MODE
// ============================

function setupThemeToggle(){

  const themeToggle = document.getElementById("theme-toggle");

  if(themeToggle){

    let dark = false;

    themeToggle.addEventListener("click", () => {

      dark = !dark;

      document.body.classList.toggle("dark", dark);

      themeToggle.innerHTML = dark
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';

    });

  }

}


// ============================
// RTL MODE
// ============================

function setupRTLToggle(){

  const rtlToggle = document.getElementById("rtl-toggle");

  if(rtlToggle){

    rtlToggle.addEventListener("click", () => {

      document.body.classList.toggle("rtl");

      if(document.body.classList.contains("rtl")){
        document.body.dir = "rtl";
      }

      else{
        document.body.dir = "ltr";
      }

    });

  }

}


// ============================
// SCROLL TO TOP
// ============================

function setupScrollTop(){

  const scrollTopBtn = document.querySelector(".scroll-top");

  if(scrollTopBtn){

    scrollTopBtn.addEventListener("click", (e) => {

      e.preventDefault();

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

    });

  }

}
