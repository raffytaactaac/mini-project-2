function createAccount(e) {
    e.preventDefault();

    let emailErr = document.querySelector('#emailErr');
    let passwordErr = document.querySelector('#passwordErr');
    let passwordCopyErr = document.querySelector('#passwordCopyErr');

    
    if (firstName.value === "" || lastName.value === "" || gender.value === "" || age.value === "" || birthDate.value === "" || contactNum.value === "" || address.value === "" || email.value === "" || password.value === "" || passwordCopy.value ==="") {
        alert("Please complete the form")
    } else {
        if (password.value === passwordCopy.value) {
            let userObj = {
                firstname: firstName.value,
                middlename: middleName.value,
                lastname: lastName.value,
                gender: gender.value,
                age: age.value,
                birthdate: birthDate.value,
                contact: contactNum.value,
                address: address.value,
                email: email.value,
                password: password.value,
            }
    
            // get item in local storage
            let userString = localStorage.getItem('users');
            let emailString = JSON.parse(userString);
            let users = userString ? JSON.parse(userString): [];
    
            let checkEmail = false;
            for (let i in emailString) {
                if (emailString[i].email === email.value){
                    checkEmail = true;
                    emailErr.textContent = "Email already taken";
                    emailErr.classList.remove('display-err');
                    setTimeout(() => {
                        emailErr.classList.add('display-err')
                    },3000);
                    break;
                }
            }
    
            if (!checkEmail) {
                let emailValue = email.value;
                let passValue = password.value;
                let passCopyValue = passwordCopy.value;
    
                let emailRegX = /^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                let passRegX = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,12}$/;
    
                if (emailValue.match(emailRegX)) {
    
                    if (passValue.match(passRegX)) {
                        users.push(userObj);
                        localStorage.setItem('users', JSON.stringify(users));
                        alert("Account successfuly created");

                        firstName.value="";
                        middleName.value="";
                        lastName.value="";
                        gender.value="";
                        age.value="";
                        birthDate.value="";
                        contactNum.value="";
                        address.value="";
                        email.value="";
                        password.value="";
                        passwordCopy.value="";
                        document.getElementById("btnclosecreate").click();

                    } else {
                        passwordErr.classList.remove('display-err');
                        setTimeout(() => {
                            passwordErr.classList.add('display-err')
                        },3000);
                    }
    
                } else {
                    emailErr.textContent = "Invalid email address";
                    emailErr.classList.remove('display-err');
                    setTimeout(() => {
                        emailErr.classList.add('display-err')
                    },3000);
                }
            }
    
        } else {
                passwordCopyErr.classList.remove('display-err');
                setTimeout(() => {
                    passwordCopyErr.classList.add('display-err')
                },3000);
        }
    }

}

export default createAccount