const form = document.getElementById('form');
const username = document.getElementById('name');
const birth = document.getElementById('birth');
const mes = document.getElementById('message');

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
    const birthValue = birth.value.trim();
    const mesValue = mes.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

    if(birthValue === '') {
        setError(birth, 'Birth date is required');
    } else{
        setSuccess(birth);
    }

    if(mesValue === '') {
        setError(mes, 'Message is required');
    } else{
        setSuccess(mes);
    }

    if(usernameValue.length > 0 && birthValue.length > 0 && mesValue.length > 0){
        window.location.assign("index.html");
        alert("Message successfully delivered");
    }

};