document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .nav-link');
  const backToTop = document.getElementById('back-to-top');

  // Toggle mobile menu
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
      }

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = mobileNav && mobileNav.contains(event.target);
    const isClickInsideToggle = menuToggle && menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickInsideToggle && mobileNav && mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // Back to top button
  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Skip if it's the back-to-top button
      if (href === '#' || this.id === 'back-to-top') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Add scroll effect to header
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    }
    lastScroll = currentScroll;
  });
});
