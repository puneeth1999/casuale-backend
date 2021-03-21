console.log('Script is working');
const form = document.querySelector('.login-form');
const p_text = document.querySelector('.p_');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //USERNAME Validation
    const username = document.querySelector('#username');
    console.log('Your username is:\t', username.value);
    if (username.value.length <= 3) {
        console.log('Username is not long enough');
        const error_msg = document.querySelector('.error-box');
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
    //PASSWORD Validation
    const pass = document.querySelector('#password');
    if (pass.value.length <= 5) {
        console.log('password is too short');
        const error_msg = document.querySelector('.error-box');
        error_msg.classList.add('error-style');
        error_msg.innerHTML = 'Password must contain atleast 6 characters';
        try {
            error_msg.classList.remove('removeerrormsg');
        } catch {
            pass;
        }
        p_text.classList.add('p_invisible');
        const error_form = document.querySelector('.form-div');
        error_form.classList.add('error-form-div');
        setTimeout(() => error_msg.classList.add('removeerrormsg'), 3000);
        setTimeout(() => p_text.classList.remove('p_invisible'), 3000);
    } else if (pass.value.length > 5) {
        // console.log('password length is good. Checking for strength..');
        let strength = 0;
        const input = pass.value;
        strength += /[A-Z]+/.test(input) ? 1 : 0;
        strength += /[a-z]+/.test(input) ? 1 : 0;
        strength += /[0-9]+/.test(input) ? 1 : 0;
        strength += /[\W]+/.test(input) ? 1 : 0;
        // console.log(typeof(pass.value));
        switch (strength) {
            case 1:
                level = 1;
                console.log(1);
                console.log('Your password must contain 1 lower-case, 1 upper-case, 1 numeric and 1 special character');
                error_msg = document.querySelector('.error-box');
                error_msg.classList.add('error-style');
                error_msg.innerHTML = 'Your password must contain 1 lower-case, 1 upper-case, 1 numeric and 1 special character';
                try {
                    error_msg.classList.remove('removeerrormsg');
                } catch {
                    pass;
                }
                p_text.classList.add('p_invisible');
                error_form = document.querySelector('.form-div');
                error_form.classList.add('error-form-div');
                setTimeout(() => error_msg.classList.add('removeerrormsg'), 3000);
                setTimeout(() => p_text.classList.remove('p_invisible'), 3000);
                break;
            case 2:
                level = 2;
                console.log(2);
                console.log('Your password must contain 1 lower-case, 1 upper-case, 1 numeric and 1 special character');
                error_msg = document.querySelector('.error-box');
                error_msg.classList.add('error-style');
                error_msg.innerHTML = 'Your password must contain 1 lower-case, 1 upper-case, 1 numeric and 1 special character';
                try {
                    error_msg.classList.remove('removeerrormsg');
                } catch {
                    pass;
                }
                p_text.classList.add('p_invisible');
                error_form = document.querySelector('.form-div');
                error_form.classList.add('error-form-div');
                setTimeout(() => error_msg.classList.add('removeerrormsg'), 3000);
                setTimeout(() => p_text.classList.remove('p_invisible'), 3000);
                break;
            case 3:
                level = 3;
                console.log(3);
                console.log('Your password must contain 1 lower-case, 1 upper-case, 1 numeric and 1 special character');
                error_msg = document.querySelector('.error-box');
                error_msg.classList.add('error-style');
                error_msg.innerHTML = 'Your password must contain 1 lower-case, 1 upper-case, 1 numeric and 1 special character';
                try {
                    error_msg.classList.remove('removeerrormsg');
                } catch {
                    pass;
                }
                p_text.classList.add('p_invisible');
                error_form = document.querySelector('.form-div');
                error_form.classList.add('error-form-div');
                setTimeout(() => error_msg.classList.add('removeerrormsg'), 3000);
                setTimeout(() => p_text.classList.remove('p_invisible'), 3000);
                break;
            case 4:
                level = 4;
                console.log(4);
                console.log('Your password is strong');
                break;
            default:
                console.log('invalid password sequence!');
        }
    }
});