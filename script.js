const sidebar = document.querySelector('.sideBar');
const menuButton = document.querySelector('.menu');
const mriLink = document.querySelector('.MRILink');
const exerciseLink = document.querySelector('.exerciseLink');
const mriSection = document.querySelector('.MRIContainer');
const exerciseSection = document.querySelector('.exerciseContainer');

function showSidebar() {
    sidebar.style.transform = 'translateX(0)';
}

function hideSidebar() {
    sidebar.style.transform = 'translateX(-100%)';
}

menuButton.addEventListener('click', function(event) {
    event.stopPropagation();
    showSidebar();
});

document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        hideSidebar();
    }
});

mriLink.addEventListener('click', function(event) {
    event.preventDefault();
    mriSection.scrollIntoView({ behavior: 'smooth' });
    hideSidebar();
});

exerciseLink.addEventListener('click', function(event) {
    event.preventDefault();
    exerciseSection.scrollIntoView({ behavior: 'smooth' });
    hideSidebar();
});
