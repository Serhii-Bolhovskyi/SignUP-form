const form = document.querySelector('.form');
const inputFields = form.getElementsByClassName("form-control");

for(const item of inputFields) {
    item.addEventListener('blur', (event) => {
        validateForm(event);
    });
}

const setError = (element, message) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = message;
    element.classList.add("invalid");
    element.classList.remove("valid");
}

const setValid = (element) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = "";
    element.classList.remove("invalid");
    element.classList.add("valid");
}

const validateFirstName = (firstName) => {
    if (firstName.value === "") {
        setError(firstName, "First Name is required");
    } else {
        setValid(firstName)
    };
}

const validateLastName = (lastName) => {
    if (lastName.value === "") {
        setError(lastName, "Last Name is required");
    } else {
        setValid(lastName)
    };
}

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.value === "") {
        setError(email, "Email is required");
    } else if (!emailRegex.test(email.value)) {
        setError(email, "Email is not valid")
    } else {
        setValid(email);
    }
}

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (password.value === "") {
        setError(password, "Password is required");
    } else if (!passwordRegex.test(password.value)) {
        setError(
            password,
            "Password must contain at least 8 symbols, one digit and one special character"    
        )
    } else {
        setValid(password);
    }
}

const validateForm = (event) => {
    switch (event.target.id) {
        case "firstName": 
            validateFirstName(event.target);
            break;
        case "lastName": 
            validateLastName(event.target);
            break;
        case "email": 
            validateEmail(event.target);
            break;
        case "password": 
            validatePassword(event.target);
            break;
        default:
            alert("Validation Error!")
    }
}