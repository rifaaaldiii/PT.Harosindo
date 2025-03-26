const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  // Periksa apakah yang diklik adalah bagian dari dropdown language
  const isLanguageClick = e.target.closest('.language-dropdown');
  
  // Jika bukan klik pada dropdown language, baru tutup menu
  if (!isLanguageClick) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

function toggleLangMenu() {
  const langMenu = document.getElementById('langMenu');
  langMenu.classList.toggle('open');
}

// Menangani klik pada pilihan bahasa
const langOptions = document.querySelectorAll('.language a');
langOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    // Hapus e.preventDefault() agar link bisa diakses
    const selectedLang = option.getAttribute('data-lang');
    document.getElementById('langMenu').classList.remove('open');
  });
});

// Tutup menu bahasa saat klik di luar
document.addEventListener('click', (e) => {
  const langDropdown = document.querySelector('.language-dropdown');
  if (!langDropdown.contains(e.target)) {
    document.getElementById('langMenu').classList.remove('open');
  }
});

const scrollRevealOption = {
  distance: "50px", 
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
