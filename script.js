// ===================== MEGA MENU (Hover fallback) =====================
function toggleMega(e) {
  e.preventDefault();
  let parent = e.target.closest(".mega-parent");
  let menu = parent.querySelector(".mega-menu");
  document.querySelectorAll(".mega-menu").forEach(m => {
    if (m !== menu) m.style.display = "none";
  });
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// ===================== MOBILE SIDEBAR =====================
function openNav() {
  let nav = document.getElementById("mobileNav");
  let icon = document.querySelector(".menu-btn i");

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

function closeNav() {
  document.getElementById("mobileNav").classList.remove("active");
  let menuBtn = document.querySelector(".menu-btn i");
  menuBtn.classList.remove("fa-times");
  menuBtn.classList.add("fa-bars");
}

function toggleMenu(el) {
  let next = el.nextElementSibling;
  next.style.display = (next.style.display === "block") ? "none" : "block";
}

// ===================== CAROUSEL INITIALIZATION =====================
// Wait for the page to fully load, then check if Bootstrap is available
window.addEventListener('load', function() {
  if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
    let carousel = document.querySelector('#heroCarousel');
    if (carousel) {
      let bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 6000,  // 6 seconds (6000 milliseconds)
        ride: 'carousel',
        wrap: true,
        pause: 'hover'   // Pause on mouse hover
      });
      console.log('Carousel initialized with 6 second interval');
      
      // SCROLL WHEEL FEATURE REMOVED - Images will NOT change when scrolling
    } else {
      console.warn('#heroCarousel not found');
    }
  } else {
    console.warn('Bootstrap not loaded yet. Carousel will not start.');
  }
});

// ===================== NAVBAR SCROLL EFFECT =====================
window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===================== LOGIN PANEL =====================
function openLoginPanel() {
  document.getElementById("loginPanel").classList.add("active");
  document.getElementById("loginOverlay").classList.add("active");
}
function closeLoginPanel() {
  document.getElementById("loginPanel").classList.remove("active");
  document.getElementById("loginOverlay").classList.remove("active");
}
function createAccount() {
  alert("Create account functionality – redirect to signup page.");
}

// ===================== LOGIN FORM SUBMIT =====================
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      alert(`Sign in attempted with email: ${email}`);
      closeLoginPanel();
    });
  }
});

// ===================== SEARCH BAR =====================
function openSearch() {
  document.getElementById("searchBar").classList.add("active");
  setTimeout(() => {
    document.getElementById("searchInput").focus();
  }, 300);
}
function closeSearch() {
  document.getElementById("searchBar").classList.remove("active");
}

// ===================== PRODUCT CARD INTERACTIONS =====================
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.product-card').forEach(card => {
    const img = card.querySelector('.product-image img');
    const swatches = card.querySelectorAll('.swatch');

    // Parse data attributes (skip if not present)
    const colors = card.getAttribute('data-colors')?.split(',') || [];
    const colorImages = card.getAttribute('data-color-images')?.split(',') || [];
    const hoverImages = card.getAttribute('data-hover-images')?.split(',') || [];

    let currentSrc = img.src;
    let hoverSrc = null;

    // Build hover map: color -> hover image URL (if provided)
    const hoverMap = {};
    if (hoverImages.length) {
      colors.forEach((color, idx) => {
        hoverMap[color] = hoverImages[idx] || null;
      });
    }

    // Function to update both current and hover images
    function setImage(newSrc, newHoverSrc = null) {
      img.src = newSrc;
      currentSrc = newSrc;
      hoverSrc = newHoverSrc;
    }

    // Hover effect (only if a hover image exists for the current state)
    img.addEventListener('mouseenter', () => {
      if (hoverSrc && hoverSrc !== img.src) {
        img.src = hoverSrc;
      }
    });
    img.addEventListener('mouseleave', () => {
      if (hoverSrc) {
        img.src = currentSrc;
      }
    });

    // Color swatch click: change image and update hover source
    swatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const color = swatch.getAttribute('data-color');
        const idx = colors.indexOf(color);
        if (idx !== -1 && colorImages[idx]) {
          const newImage = colorImages[idx];
          const newHover = hoverMap[color] || null;
          setImage(newImage, newHover);
        } else {
          console.warn(`No image defined for color ${color} in product ${card.dataset.productId}`);
        }
      });
    });
  });
});

// ===================== HORIZONTAL CAROUSEL SCROLL =====================
const track = document.getElementById('carouselTrack');
const leftBtn = document.getElementById('scrollLeftBtn');
const rightBtn = document.getElementById('scrollRightBtn');

if (track && leftBtn && rightBtn) {
  function scrollCarousel(direction) {
    const item = track.querySelector('.carousel-item');
    if (item) {
      const itemWidth = item.offsetWidth;
      const gap = parseFloat(getComputedStyle(track).gap) || 20;
      const scrollAmount = itemWidth + gap;
      if (direction === 'left') {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }
  leftBtn.addEventListener('click', () => scrollCarousel('left'));
  rightBtn.addEventListener('click', () => scrollCarousel('right'));
}

// ===================== BACK TO TOP BUTTON =====================
const backToTopBtn = document.getElementById('backToTopBtn');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Scroll to top when clicked
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

