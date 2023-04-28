function loginAccount() {
    let emailString = localStorage.getItem('users');
    let email = JSON.parse(emailString);
    let loginSuccessful = false;
    let loginErr = document.querySelector('#loginErr');

    for (let i in email) {
        if (email[i].email === loginEmail.value && email[i].password === loginPassword.value) {
            loginSuccessful = true;
            let name = email[i].firstname;
            localStorage.setItem("name", JSON.stringify(name));
            alert("Successfuly Logged in!")
            window.location.href = "./shop.html";
            break;
        }
    }

    if (!loginSuccessful) {
        loginErr.classList.remove('display-err');
        setTimeout(() => {
            loginErr.classList.add('display-err')
        }, 3000)
    }
}

export default loginAccount