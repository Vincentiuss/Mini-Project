const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else{
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    } else{
        setSuccess(phone);
    }

    if(usernameValue.length > 0 && emailValue.length > 0 && phoneValue.length > 0){
        localStorage.setItem('person-name',usernameValue);
        window.location.href = "index.html";
        window.location.assign("index.html");
        alert('Register Success')
    }

};