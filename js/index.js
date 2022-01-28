const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navDarkMode = document.querySelector('.nav-night-mode');

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// Hacer dark mode
navDarkMode.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
    // document.body.classList.
});