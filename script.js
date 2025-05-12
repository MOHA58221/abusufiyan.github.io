// script.js

// Optional: Highlight current page in navbar
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPage = location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = "#00ffff";
    }
  });
});

// Change background on skill hover
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skills-section');
  const skillItems = document.querySelectorAll('.skills-list li');

  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const bg = item.getAttribute('data-bg');
      skillsSection.style.backgroundImage = `url(${bg})`;
    });

    item.addEventListener('mouseleave', () => {
      skillsSection.style.backgroundImage = '';
    });
  });
});
