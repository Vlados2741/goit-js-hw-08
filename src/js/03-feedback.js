const throttle = require('lodash.throttle');
const refs = {
    form: document.querySelector(`.feedback-form`),
    button: document.querySelector(`button`),
    input: document.querySelector(`input`),
    textarea: document.querySelector(`textarea`),
};
 
const onFormInput = (e) => {
    const {
        elements: { email, message },
    } = e.currentTarget;
    const user = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(user));
};

function fillForm() {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        refs.input.value = JSON.parse(savedData).email;
        refs.textarea.value = JSON.parse(savedData).message;
    }
};

fillForm()

const onSubmitForm = (e) => {
    e.preventDefault();
    const {
        elements: { email, message },
    } = e.currentTarget;
    const user = {
        email: email.value,
        message: message.value
    }
    console.log(user);
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
    
};
refs.form.addEventListener(`input`, onFormInput);
 


refs.form.addEventListener(`submit`, onSubmitForm);