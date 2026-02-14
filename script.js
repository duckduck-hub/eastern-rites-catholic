// script.js

// Smooth scrolling functionality
// Add smooth scrolling to all links
const smoothScroll = (target) => {
  const targetElement = document.querySelector(target);
  targetElement.scrollIntoView({ behavior: 'smooth' });
};

// Dynamic content loading
const loadContent = (url, target) => {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(target).innerHTML = data;
    })
    .catch(error => console.error('Error loading content:', error));
};

// Form validation
const validateForm = (form) => {
  const inputs = form.querySelectorAll('input, textarea');
  let valid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      valid = false;
      input.classList.add('error'); // Add error class
    } else {
      input.classList.remove('error');
    }
  });

  return valid;
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      smoothScroll(link.getAttribute('href'));
    });
  });

  // Form submission
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!validateForm(form)) {
        event.preventDefault();
        alert('Please fill in all fields.');
      }
    });
  }
  
  // Load dynamic content
  loadContent('dynamic-content.html', '#content');
});
