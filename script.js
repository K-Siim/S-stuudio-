const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");
const body = document.body;

// Event Listeners for Hamburger Menu
hamburger.addEventListener("click", (e) => {
  e.preventDefault();  
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Window Resize Event
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-width: 550px)").matches) {
  closeMenu();
}

// Scroll Event for Body
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

// Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const container = carousel.parentElement;
    const leftArrow = container.querySelector(".left-arrow");
    const rightArrow = container.querySelector(".right-arrow");

    const scrollAmount = 240; 

    leftArrow.addEventListener("click", () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    rightArrow.addEventListener("click", () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    carousel.addEventListener("scroll", () => {
      leftArrow.disabled = carousel.scrollLeft === 0;
      rightArrow.disabled =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;
    });
  });
});

// Smooth Scroll for Sidebar Menu
document.querySelectorAll('.sidebar-menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}
