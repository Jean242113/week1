// Select elements
const burgerMenuIcon = document.getElementById('burgerMenuIcon');
const popupMenu = document.getElementById('popupMenu');
const closeIcon = document.getElementById('closeIcon');

// Show popup menu when burger icon is clicked
burgerMenuIcon.addEventListener('click', () => {
    popupMenu.classList.remove('hidden');
});

// Hide popup menu when close icon is clicked
closeIcon.addEventListener('click', () => {
    popupMenu.classList.add('hidden');
});
