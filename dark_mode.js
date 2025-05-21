const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement; // Target the <html> element

// Function to update button icon based on dark mode state
function updateDarkModeIcon() {
    if (htmlElement.classList.contains('dark')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun fa-lg"></i>'; // Sun icon
        darkModeToggle.classList.remove('text-yellow-500');
        darkModeToggle.classList.add('text-orange-500'); // Adjust color for sun icon if needed
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon fa-lg"></i>'; // Moon icon
        darkModeToggle.classList.remove('text-orange-500');
        darkModeToggle.classList.add('text-yellow-500');  // Adjust color for moon icon
    }
}

// Event listener for the toggle button
darkModeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    }
    updateDarkModeIcon();
});

// Initial icon update (will be complemented by preference loading in the next step)
// We need to ensure this runs after the DOM is fully loaded,
// so we'll wrap it in a DOMContentLoaded listener.
document.addEventListener('DOMContentLoaded', () => {
    // Initial check and icon update can also be triggered by the preference loading script
    // For now, just call updateDarkModeIcon. The preference script will handle the initial class.
    if (darkModeToggle) { // Ensure the button exists before trying to update its icon
        updateDarkModeIcon();
    }
});
