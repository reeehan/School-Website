window.onload = function() {
    alert("Welcome to Helenski International School!");
};

document.addEventListener("DOMContentLoaded", function () {
    
    const images = document.querySelectorAll(".staff-member img");

    images.forEach((img) => {
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.1)"; 
            img.style.transition = "0.3s ease-in-out"; 
            img.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)"; 
        });

        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)"; // Reset size
            img.style.boxShadow = "none"; // Remove shadow
        });
    });
});

const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', function(event) {
    
    this.style.color = 'black'; 
    this.style.textDecoration = 'underline'; 
    this.style.fontWeight = 'bold'; 
    this.style.transition = 'color 0.3s ease, text-decoration 0.3s ease, font-weight 0.3s ease'; 

  });

  link.addEventListener('mouseout', function(event) {
    
    this.style.color = ''; 
    this.style.textDecoration = '';  
    this.style.fontWeight = ''; 
    this.style.transition = 'color 0.3s ease, text-decoration 0.3s ease, font-weight 0.3s ease'; 

  });
});