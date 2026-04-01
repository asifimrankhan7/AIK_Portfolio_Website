window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const body = document.body;
  const loaderBar = document.querySelector('.loader-bar');
  const loaderPercentage = document.querySelector('.loader-percentage');

  let count = 0;
  const loadingSpeed = 10; // Lower is faster

  const loadingInterval = setInterval(() => {
    count++;
    
    if (loaderBar) loaderBar.style.width = count + '%';
    if (loaderPercentage) loaderPercentage.innerText = count + '%';

    if (count >= 100) {
      clearInterval(loadingInterval);
      
      // Add a small pause at 100% for perceived completeness
      setTimeout(() => {
        preloader.classList.add('loaded');
        body.classList.remove('loading');
      }, 300);
    }
  }, loadingSpeed);
});

document.addEventListener('DOMContentLoaded', () => {
  // --- SCROLL REVEAL (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { 
    threshold: 0.1, 
    rootMargin: '0px 0px -20px 0px' 
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- NAVIGATION PILL SCROLL EFFECT ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // --- SMOOTH ANCHOR SCROLLING ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- SHOWREEL PARALLAX ---
  const showreel = document.querySelector('.showreel-bg');
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;
    if (showreel && window.innerWidth > 768) {
      showreel.style.transform = `translateY(${scrollPos * 0.05}px) scale(1.02)`;
    }
  });

  // --- MOBILE HEADER SCROLL DYNAMICS ---
  let lastScrollY = window.scrollY;
  let scrollTimer = null;

  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) return; // Only mobile

    const currentScrollY = window.scrollY;
    
    // 1. Manage Transparency while active scrolling
    header.classList.add('header-scrolled');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      header.classList.remove('header-scrolled');
    }, 100);

    // 2. Headroom Hide/Show logic
    if (currentScrollY > 100) { // Start hiding after a threshold
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('header-hidden');
      } else {
        // Scrolling up
        header.classList.remove('header-hidden');
      }
    } else {
      // Near top - always show
      header.classList.remove('header-hidden');
    }
    
    lastScrollY = currentScrollY;
  });

  // --- ACTIVE NAV HIGHLIGHTING ---
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const navObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  // --- MOBILE MENU TOGGLE ---
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu-overlay');
  const body = document.body;
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      body.classList.toggle('menu-open');
      body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        body.classList.remove("menu-open");
        body.style.overflow = "";
      });
    });
  }

  // --- BACK TO TOP BUTTON LOGIC ---
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});