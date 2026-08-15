/*
 * ==========================================================
 * AKANCHA RANI - PORTFOLIO INTERACTIVE ENGINE (app.js)
 * Clean, lightweight, modular JavaScript
 * ==========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData || {};

  // ========================================================
  // 1. TOP SCROLL PROGRESS BAR & NAVBAR SCROLL EFFECT
  // ========================================================
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPos = window.scrollY;
    
    if (totalHeight > 0 && progressBar) {
      const progressPercent = (scrollPos / totalHeight) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========================================================
  // 2. THEME SWITCHER (DARK / LIGHT MODE)
  // ========================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function initTheme() {
    const savedTheme = localStorage.getItem('akancha_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('akancha_theme', theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  initTheme();

  // ========================================================
  // 3. MOBILE NAVIGATION DRAWER
  // ========================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    document.addEventListener('click', (e) => {
      if (!mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });
  }

  function closeMobileNav() {
    if (mobileNav && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      if (mobileToggle) {
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    }
  }

  // ========================================================
  // 4. TYPEWRITER / ROTATING ROLES EFFECT (Coming & Going)
  // ========================================================
  const roleElement = document.getElementById('typed-role');
  const roles = data.personal?.rotatingRoles || [
    "🚀 Software Engineer",
    "☕ Java & Spring Boot Developer",
    "🌐 Full Stack Developer",
    "🛡️ Backend & Security Enthusiast"
  ];

  let currentRoleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function typeRole() {
    if (!roleElement) return;

    const currentRole = roles[currentRoleIdx];

    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 45;
    } else {
      roleElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      // Pause at full text
      isDeleting = true;
      typeSpeed = 1800;
    } else if (isDeleting && charIdx === 0) {
      // Switch to next role
      isDeleting = false;
      currentRoleIdx = (currentRoleIdx + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(typeRole, typeSpeed);
  }

  if (roleElement) {
    typeRole();
  }

  // ========================================================
  // 5. ACTIVE NAVBAR SCROLLSPY
  // ========================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);

  // ========================================================
  // 6. PROJECTS FILTERING
  // ========================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const isFeatured = card.getAttribute('data-featured') === 'true';

        if (filterValue === 'all') {
          showCard(card);
        } else if (filterValue === 'featured') {
          if (isFeatured) showCard(card);
          else hideCard(card);
        } else if (filterValue === 'java-spring') {
          if (category === 'java-spring') showCard(card);
          else hideCard(card);
        } else if (filterValue === 'fullstack') {
          if (category === 'fullstack' || category === 'java-spring') showCard(card);
          else hideCard(card);
        } else if (filterValue === 'security') {
          if (category === 'security' || category === 'automation' || category === 'cpp') showCard(card);
          else hideCard(card);
        } else {
          if (category === filterValue) showCard(card);
          else hideCard(card);
        }
      });
    });
  });

  function hideCard(card) {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.display = 'none';
    }, 250);
  }

  function showCard(card) {
    card.style.display = 'flex';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, 20);
  }

  // ========================================================
  // 7. SKILL PROGRESS BAR ANIMATION ON VIEW
  // ========================================================
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillsSection = document.getElementById('skills');

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          if (level) {
            bar.style.width = `${level}%`;
          }
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // ========================================================
  // 8. CERTIFICATES & DETAILS LIGHTBOX MODAL
  // ========================================================
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalLink = document.getElementById('modal-link');
  const modalCloseBtn = document.getElementById('modal-close');

  window.openCertModal = function(imageSrc, title, issuer, date, verifyUrl) {
    if (!modal) return;
    if (modalImg) modalImg.src = imageSrc;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = `${issuer} • ${date}`;
    if (modalLink) {
      if (verifyUrl && verifyUrl !== '#') {
        modalLink.href = verifyUrl;
        modalLink.style.display = 'inline-flex';
      } else {
        modalLink.style.display = 'none';
      }
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.openProjectModal = function(projectId) {
    if (!modal || !data.projects) return;
    const project = data.projects.find(p => p.id === projectId);
    if (!project) return;

    if (modalImg) modalImg.style.display = 'none';
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDesc) {
      modalDesc.innerHTML = `
        <div style="margin-bottom: 1rem; color: var(--primary); font-weight: 700;">${project.categoryLabel}</div>
        <p style="margin-bottom: 1rem; line-height: 1.7; color: var(--text-main); font-size: 1rem;">${project.details || project.summary}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
          ${(project.tags || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      `;
    }
    if (modalLink) {
      modalLink.href = project.github;
      modalLink.innerHTML = `<i class="fa-brands fa-github"></i> View GitHub Repository`;
      modalLink.style.display = 'inline-flex';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (modalImg) modalImg.style.display = 'block';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // ========================================================
  // 9. COPY EMAIL TO CLIPBOARD
  // ========================================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = data.personal?.email || 'akancharani2@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        showToast("Email copied to clipboard!");
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2500);
      }).catch(() => {
        showToast("Email: " + email);
      });
    });
  }

  // ========================================================
  // 10. CONTACT FORM SUBMISSION & TOAST NOTIFICATION
  // ========================================================
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalContent = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Message Sent!`;
        showToast("Thank you! Your message has been sent successfully.");
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalContent;
        }, 3000);
      }, 1000);
    });
  }

  // ========================================================
  // 11. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ========================================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
