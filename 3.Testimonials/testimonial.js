const testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseover', () => {
    testimonial.style.backgroundColor = '#e8f4ff';
  });

  testimonial.addEventListener('mouseout', () => {
    testimonial.style.backgroundColor = '#f9f9f9';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  alert("Testimonials page loaded successfully!");
});

document.getElementById("myBtn").addEventListener("click", function() {
  setTimeout(function() { 
      window.location.href = "../1.Home Page/index.html"; 
  }, 200);
});

const listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '';
  });
});
