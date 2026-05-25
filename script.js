// ====================================
// SPICE HIGHWAY DHABA - JAVASCRIPT
// Interactive Functionality
// ====================================

// ============= GLOBAL VARIABLES =============
let currentTestimonial = 0;
const testimonialInterval = 5000; // 5 seconds

// ============= DOCUMENT READY =============
document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initAnimations();
  initTestimonials();
  initMenuTabs();
  initForms();
  initSmoothScroll();
  initMenuModal();
});

// ============= NAVIGATION =============
function initNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.style.overflow = navLinks.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !hamburger.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Navbar scroll effect
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
        navbar.style.background =
          "linear-gradient(135deg, rgba(62, 39, 35, 0.98) 0%, rgba(141, 78, 19, 0.98) 100%)";
      } else {
        navbar.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.2)";
        navbar.style.background =
          "linear-gradient(135deg, #3E2723 0%, #8B4513 100%)";
      }
    });
  }
}

// ============= SCROLL ANIMATIONS =============
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  const animatedElements = document.querySelectorAll("[data-animate]");
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}

// ============= TESTIMONIALS CAROUSEL =============
function initTestimonials() {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (testimonialCards.length === 0) return;

  // Create dots
  if (dotsContainer) {
    testimonialCards.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToTestimonial(index));
      dotsContainer.appendChild(dot);
    });
  }

  // Navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentTestimonial =
        (currentTestimonial - 1 + testimonialCards.length) %
        testimonialCards.length;
      updateTestimonials();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
      updateTestimonials();
    });
  }

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    updateTestimonials();
  }, testimonialInterval);

  function updateTestimonials() {
    testimonialCards.forEach((card, index) => {
      card.classList.toggle("active", index === currentTestimonial);
    });

    const dots = document.querySelectorAll(".carousel-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentTestimonial);
    });
  }

  function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonials();
  }
}

// ============= MENU TABS =============
function initMenuTabs() {
  const menuTabs = document.querySelectorAll(".menu-tab");
  const menuCategories = document.querySelectorAll(".menu-category");

  if (menuTabs.length === 0) return;

  menuTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = this.dataset.category;

      // Remove active class from all tabs and categories
      menuTabs.forEach((t) => t.classList.remove("active"));
      menuCategories.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab and corresponding category
      this.classList.add("active");
      const activeCategory = document.getElementById(category);
      if (activeCategory) {
        activeCategory.classList.add("active");

        // Smooth scroll to category
        setTimeout(() => {
          activeCategory.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    });
  });
}

// ============= MENU MODAL =============
function initMenuModal() {
  const seeMenuBtn = document.getElementById("seeMenuBtn");
  const menuModal = document.getElementById("menuModal");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  if (!seeMenuBtn || !menuModal || !closeMenuBtn) return;

  // Open modal
  seeMenuBtn.addEventListener("click", function () {
    menuModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close modal
  closeMenuBtn.addEventListener("click", function () {
    menuModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Close modal when clicking outside the modal content
  menuModal.addEventListener("click", function (event) {
    if (event.target === menuModal) {
      menuModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuModal.classList.contains("active")) {
      menuModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// ============= FORM HANDLING =============
function initForms() {
  // Reservation form (home page)
  const reservationForm = document.getElementById("reservationForm");
  if (reservationForm) {
    reservationForm.addEventListener("submit", handleReservationSubmit);
  }

  // Contact form (contact page)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }

  // Set minimum date to today for date inputs
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach((input) => {
    const today = new Date().toISOString().split("T")[0];
    input.setAttribute("min", today);
  });
}

function handleReservationSubmit(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    guests: document.getElementById("guests").value,
    message: document.getElementById("message").value,
  };

  // Validate form
  if (!validateEmail(formData.email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!validatePhone(formData.phone)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  // Simulate form submission
  console.log("Reservation submitted:", formData);

  // Show success message
  showSuccessMessage(
    "Thank you! Your reservation request has been received. We will contact you shortly to confirm.",
  );

  // Reset form
  e.target.reset();
}

function handleContactSubmit(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    guests: document.getElementById("guests").value,
    message: document.getElementById("message").value,
  };

  // Clear previous errors
  clearFormErrors();

  // Validate form
  let isValid = true;

  if (!formData.name.trim()) {
    showFormError("nameError", "Name is required");
    isValid = false;
  }

  if (!validateEmail(formData.email)) {
    showFormError("emailError", "Please enter a valid email address");
    isValid = false;
  }

  if (!validatePhone(formData.phone)) {
    showFormError("phoneError", "Please enter a valid 10-digit phone number");
    isValid = false;
  }

  if (!formData.date) {
    showFormError("dateError", "Please select a date");
    isValid = false;
  }

  if (!formData.time) {
    showFormError("timeError", "Please select a time");
    isValid = false;
  }

  if (!formData.guests) {
    showFormError("guestsError", "Please select number of guests");
    isValid = false;
  }

  if (!isValid) return;

  // Simulate form submission
  console.log("Contact form submitted:", formData);

  // Show success message
  const successElement = document.getElementById("formSuccess");
  if (successElement) {
    successElement.classList.add("show");
    setTimeout(() => {
      successElement.classList.remove("show");
    }, 5000);
  }

  // Reset form
  e.target.reset();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(phone.replace(/\s/g, ""));
}

function showFormError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

function clearFormErrors() {
  const errorElements = document.querySelectorAll(".form-error");
  errorElements.forEach((element) => {
    element.textContent = "";
    element.style.display = "none";
  });
}

function showSuccessMessage(message) {
  // Create success alert
  const alertDiv = document.createElement("div");
  alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        font-family: 'Crimson Text', Georgia, serif;
        font-size: 1.125rem;
        animation: slideInRight 0.5s ease;
    `;
  alertDiv.textContent = message;

  document.body.appendChild(alertDiv);

  // Remove after 5 seconds
  setTimeout(() => {
    alertDiv.style.animation = "fadeOut 0.5s ease";
    setTimeout(() => alertDiv.remove(), 500);
  }, 5000);
}

// ============= SMOOTH SCROLLING =============
function initSmoothScroll() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// ============= PARALLAX EFFECT =============
window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  if (hero) {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + "px";
  }
});

// ============= DISH CARD HOVER EFFECTS =============
const dishCards = document.querySelectorAll(".dish-card, .menu-item-card");
dishCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease";
  });
});

// ============= ORDER BUTTON HANDLERS =============
const orderButtons = document.querySelectorAll(".order-btn");
orderButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const dishName = this.closest(".dish-card, .menu-item-card").querySelector(
      ".dish-name, .menu-item-name",
    ).textContent;
    showOrderModal(dishName);
  });
});

function showOrderModal(dishName) {
  const modal = document.createElement("div");
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 20px;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    `;

  modalContent.innerHTML = `
        <h2 style="font-family: 'Secular One', sans-serif; color: #3E2723; margin-bottom: 1rem; font-size: 2rem;">Order ${dishName}</h2>
        <p style="font-family: 'Crimson Text', Georgia, serif; font-size: 1.25rem; color: #5D4037; margin-bottom: 2rem;">Choose your delivery platform</p>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1.5rem;">
            <a href="https://www.swiggy.com" target="_blank" style="flex: 1; padding: 1rem 2rem; background: linear-gradient(135deg, #FC8019, #FF5733); color: white; text-decoration: none; border-radius: 10px; font-weight: 600; transition: transform 0.3s;">
                Swiggy
            </a>
            <a href="https://www.zomato.com" target="_blank" style="flex: 1; padding: 1rem 2rem; background: linear-gradient(135deg, #E23744, #C9001F); color: white; text-decoration: none; border-radius: 10px; font-weight: 600; transition: transform 0.3s;">
                Zomato
            </a>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1.5rem;">
            <a href="tel:+918377000373" class="call-btn">
              📞 Call Us +91 83770 00373</a
            >
        </div>
        <button id="closeModal" style="padding: 0.75rem 2rem; background: #E0E0E0; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem;">
            Close
        </button>
    `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Close modal handlers
  document
    .getElementById("closeModal")
    .addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// ============= LOADING ANIMATION =============
window.addEventListener("load", function () {
  // Fade in page content
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// ============= ACCESSIBILITY ENHANCEMENTS =============
// Add keyboard navigation for carousel
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    const prevBtn = document.getElementById("prevBtn");
    if (prevBtn) prevBtn.click();
  } else if (e.key === "ArrowRight") {
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.click();
  }
});

// ============= UTILITY FUNCTIONS =============
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler
const handleScroll = debounce(function () {
  // Add any scroll-dependent functionality here
}, 100);

window.addEventListener("scroll", handleScroll);

// ============= CONSOLE EASTER EGG =============
console.log(
  "%c🔥 Welcome to Spice Highway Dhaba! 🔥",
  "font-size: 24px; color: #FF6B35; font-weight: bold;",
);
console.log(
  "%cServing authentic Punjabi flavors since 1985",
  "font-size: 14px; color: #8B4513; font-style: italic;",
);
console.log("%cDeveloped with ❤️ and 🌶️", "font-size: 12px; color: #F7B32B;");
