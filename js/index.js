
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

// menuIcon.addEventListener('click', () => {
//     console.log('connected')
// //   mobileMenu.classList.toggle('show');
// });
menuIcon.addEventListener('click', ()=>{
    if(mobileMenu.style.display === 'none'){
        mobileMenu.style.display = "block"
    }else{
        mobileMenu.style.display='none'
    }
})

// Optional: Close menu when link is clicked
// document.querySelectorAll('#mobile-menu a').forEach(link => {
//   link.addEventListener('click', () => {
//     // mobileMenu.classList.remove('show');
//     mobileMenu.style.display('none');
//   });
// });
// login file
const loginButton = document.getElementById('log-in');

loginButton.addEventListener('click', () => {
  window.location.href = '../html/login.html'; // je page e jete chao tar URL
});

// signUp file 
const signupButton = document.getElementById('sign-up');

signupButton.addEventListener('click', () => {
  window.location.href = '../html/signup.html'; // je page e jete chao tar URL
});