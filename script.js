let loginBtn = document.querySelector('.loginBtn');
let closeBtn = document.querySelector('.closeBtn');
let overlay = document.querySelector('.overlay');
let loginForm = document.querySelector('.loginForm');

loginBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    overlay.classList.toggle('active');
    loginForm.classList.toggle('active');
})

closeBtn.addEventListener('click', function(){
    overlay.classList.remove('active');
    loginForm.classList.remove('active');
})