
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none') {
        mobileMenu.style.display = "block"
    } else {
        mobileMenu.style.display = 'none'
    }
})

const loginButton = document.getElementById('log-in');

loginButton.addEventListener('click', () => {
    window.location.href = '/html/login.html'; // je page e jete chao tar URL
});

// signUp file 
const signupButton = document.getElementById('sign-up');

signupButton.addEventListener('click', () => {
    window.location.href = '/html/signup.html'; 
});



document.getElementById('testimonial-show').addEventListener('click', function () {
    const hiddenCards = document.querySelectorAll('.testimonials-img');

    hiddenCards.forEach(function (card) {
        card.style.display = 'block'; // show the hidden cards
        card.classList.remove('hidden'); // optional: remove hidden class
    });

    this.style.display = 'none'; // button hide after click
});