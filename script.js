// Navigation Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');
      
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      
      // Burger Animation
      burger.classList.toggle('toggle');
    });
  };
  
  // Scroll to section when nav link is clicked
  const scrollToSection = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const navHeight = document.querySelector('nav').offsetHeight;
        
        window.scrollTo({
          top: targetSection.offsetTop - navHeight,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        if (nav.classList.contains('nav-active')) {
          nav.classList.remove('nav-active');
          burger.classList.remove('toggle');
          
          document.querySelectorAll('.nav-links li').forEach(link => {
            link.style.animation = '';
          });
        }
      });
    });
  };
  
  // Form Submission
  const handleFormSubmission = () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Normally you would send this data to a server
        // For demo purposes, we'll just show a success message
        
        formMessage.innerHTML = `<p class="success-message">Thanks ${name}! Your message has been sent successfully.</p>`;
        formMessage.style.color = '#38a169';
        
        // Reset form
        form.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          formMessage.innerHTML = '';
        }, 5000);
      });
    }
  };
  
  // Scroll Animation for Features
  const scrollAnimation = () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    window.addEventListener('scroll', () => {
      featureCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    });
    
    // Set initial state
    featureCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = 'all 0.5s ease';
    });
  };
  
  // Initialize all functions
  const app = () => {
    navSlide();
    scrollToSection();
    handleFormSubmission();
    scrollAnimation();
  };
  
  // Run when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', app);