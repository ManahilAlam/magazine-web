function setError(id, message) {
    const element = document.getElementById(id);
    const errorSpan = element.querySelector(".formerror");
    errorSpan.innerText = message;
}

function validationCheck() {
    // Username validation
    const nameInput = document.getElementById("fname");
    nameInput.addEventListener("input", () => {
        const regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
        const str = nameInput.value;
        if (regex.test(str)) {
            setError("name", " Valid Name");
        } else {
            setError("name", " Invalid Name (3–11 alphanumeric characters)");
        }
    });

    // Email validation
    const emailInput = document.getElementById("femail");
    emailInput.addEventListener("input", () => {
        const uniEmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const email = emailInput.value;
        if (uniEmailRegex.test(email)) {
            setError("email", " Valid Email");
        } else {
            setError("email", " use gmail" );
        }
    });

    // Phone number validation
    const phoneInput = document.getElementById("fphone");
    phoneInput.addEventListener("input", () => {
        const phoneRegex = /^0\d{10}$/;
        const phone = phoneInput.value;
        if (phoneRegex.test(phone)) {
            setError("phone", " Valid Phone Number");
        } else {
            setError("phone", " Phone number must start with 0 and be 11 digits");
        }
    });
}
