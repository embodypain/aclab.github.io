// Get the sidebar and menu button elements
const sidebar = document.querySelector('.sideBar');
const menuButton = document.querySelector('.menu');

// Function to toggle the sidebar
function toggleSidebar() {
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

// Event listener for the menu button click to open/close the sidebar
menuButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent this click from being detected by the document click event
    toggleSidebar();
});

// Event listener for clicking outside the sidebar to close it
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.style.display = 'none';
    }
});

// Prevent clicks inside the sidebar from closing it
sidebar.addEventListener('click', function(event) {
    event.stopPropagation();
});
