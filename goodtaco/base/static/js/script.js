const toggleBtn = document.querySelector('.toggle-btn');
const dropdown = document.querySelector('.dropdown');
const navbar = document.querySelector('.navbar');

// Hide the dropdown initially
dropdown.style.display = 'none';

toggleBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

let prevScrollPos = window.pageYOffset;
let scrollDelay = 0; // Initialize scroll delay
let hasScrolled = false; // Flag to track if the user has scrolled 100px

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    // Calculate the scroll difference between the current and previous scroll positions
    const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);

    if (scrollDifference >= 50) {
        // The user has scrolled at least 100px
        hasScrolled = true;
    }

    if (hasScrolled) {
        // Apply the scroll-based delay only if the user has scrolled 100px or more
        clearTimeout(scrollDelay); // Clear any existing timeout
        scrollDelay = setTimeout(() => {
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
            hasScrolled = false; // Reset the flag
        }, 10);
    }
});

toggleBtn.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});
