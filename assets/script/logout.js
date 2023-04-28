function logoutAcc() {
    localStorage.removeItem('name');

    history.pushState(null, null, window.location.href);

    // redirect the user to the login page
    window.location.href = "./index.html";
}




export default logoutAcc;