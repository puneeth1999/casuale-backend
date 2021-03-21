console.log('javascript working');
const username = document.querySelector('.text-box');
const button = document.querySelector('.submit-button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Your username is:\t', username.value);
    if (username.value.length <= 3) {
        console.log('Username is not long enough');
        const error_msg = document.querySelector('.error-box');
        console.log(error_msg);
        error_msg.classList.add('error-style');
        error_msg.innerHTML = 'Username must contain atleast 4 characters';
        try {
            error_msg.classList.remove('removeerrormsg');
        } catch {
            pass;
        }
        const error_form = document.querySelector('.login-form');
        error_form.classList.add('error-form-div');
        console.log('username is not long enough.');
        setTimeout(() => error_msg.classList.add('removeerrormsg'), 3000);
    }
});