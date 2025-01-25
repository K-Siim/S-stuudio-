const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");
const body = document.body;

hamburger.addEventListener("click", (e) => {
  e.preventDefault();  
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-width: 550px)").matches) {
  closeMenu();
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}


window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});
