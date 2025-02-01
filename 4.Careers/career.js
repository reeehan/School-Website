const careerCards = document.querySelectorAll('.career-card');

careerCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)'; 
    card.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.2)';
    card.style.backgroundColor = '#f9f9f9';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
    card.style.backgroundColor = '';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  alert("Carrers & Job Opportunities page loaded successfully!");
});

document.getElementById("myBtn").addEventListener("click", function() {
  setTimeout(function() { 
      window.location.href = "../1.Home Page/index.html"; 
  }, 200);
});