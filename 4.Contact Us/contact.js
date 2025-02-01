document.addEventListener("DOMContentLoaded", function () {
    console.log("Contact page loaded successfully.");
});

window.onload = function() {
    alert("Contact page loaded successfully.");
};

document.getElementById("myBtn").addEventListener("click", function() {
    setTimeout(function() { 
        window.location.href = "../1.Home Page/index.html"; 
    }, 200); 
});



let rows = document.querySelectorAll('table tr');


rows.forEach(row => {
    row.addEventListener('mouseenter', function() {
        row.style.backgroundColor = '#f2f2f2';
    });
    
    row.addEventListener('mouseleave', function() {
        row.style.backgroundColor = '';
    });
});
