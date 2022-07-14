const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormLoginSubmit);


function handleFormLoginSubmit(event) {
    event.preventDefault();
    // console.log(event);

    const {
        elements: { email, password }
    } = event.currentTarget;

    // console.log(event.currentTarget.elements.email);
    // console.log(email);
    // console.log(password);

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены');
    }

    const userLogin = {};
    userLogin.email = email.value;
    userLogin.password = password.value;
    console.log(userLogin);

    event.currentTarget.reset();

}


