// Get the toggle button element
const toggleBtn = document.querySelector('.toggle-btn');

// Get the dropdown element
const dropdown = document.querySelector('.dropdown');

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Hide the dropdown initially
dropdown.style.display = 'none';

// Function to toggle the dropdown
toggleBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }

    prevScrollPos = currentScrollPos;
});
