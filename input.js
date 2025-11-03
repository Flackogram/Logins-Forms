// Client side validation
const sly = document.getElementById('loginForm');
sly.addEventlistener('submit',(e) => {
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const error = document.getElementById('error');
const passerror = document.getElementById('passError');
let isValid = true;

//Email Validation expression
const empattern =    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(empattern.test(email)) {
    error.style.display = 'block';
    isValid = false;
}
else {
    error.style.display = 'none';
}

// Password Validation expression
if(password<13) {
    passerror.style.display = 'block';
    isValid = false;
}
else {
    passerror.style.display = 'none';
}
if(!isValid) {
    e.preventDefault();
}


})
