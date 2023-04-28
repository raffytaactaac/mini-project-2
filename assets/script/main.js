import createAccount from "./create-account.js";
import loginAccount from "./login-account.js";
import logoutAcc from "./logout.js";
import sellCar from "./sell-car.js";


// from index html
let firstName = document.querySelector('#firsstName');
let middleName = document.querySelector('#middleName');
let lastName = document.querySelector('#lastName');
let gender = document.querySelector('#gender');
let age = document.querySelector('#age');
let birthDate = document.querySelector('#birthDate');
let contactNum = document.querySelector('#contactNum');
let address = document.querySelector('#address');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordCopy = document.querySelector('#passwordCopy');
let loginBtn = document.querySelector('#loginBtn');
let createBtn = document.querySelector('#createBtn');


// from shop html
let searchInput = document.querySelector('#searchInput');
let searchBtn = document.querySelector('#searchBtn');
let carBrand = document.querySelector('#carBrand');
let carModel = document.querySelector('#carModel');
let year = document.querySelector('#year');
let trans = document.querySelector('#trans');
let fuel = document.querySelector('#fuel');
let carColor = document.querySelector('#carColor');
let carDescription = document.querySelector('#carDescription');
let carPrice = document.querySelector('#carPrice');
let carPhoto = document.querySelector('#carPhoto');
let sellBtn = document.querySelector('#sellBtn');
let cardItemContainer = document.querySelector('.card-item-container');
let logoutBtn = document.querySelector('#logoutBtn');
let accountName = document.querySelector('#accountName');
let accountSession = document.querySelector('#btnlogin');
let BtnGetStarted = document.querySelector('#BtnGetStarted');
let BtnProcessSched = document.querySelector('#btnprocesssched');



function InitiateSchedProcess(){

    let userName = document.querySelector("#userName");
    let userEmail = document.querySelector('#userEmail');
    let userDate = document.querySelector('#userDate');
    let userTime = document.querySelector('#userTime');


    let schedData = {
        userName: userName.value,
        userEmail: userEmail.value,
        userDate: userDate.value,
        userTime: userTime.value,

        }


        alert('Schedule Submitted please wait for email confirmation from RideXChange Staff.')
        let schedDataString = localStorage.getItem('scheds');
        let scheds = schedDataString ? JSON.parse(schedDataString): [];
        scheds.push(schedData);
        localStorage.setItem("scheds", JSON.stringify(scheds));
  

        userName.value = "";
        userEmail.value = "";
        userDate.value = "";
        userTime.value = "";

        document.getElementById("btnclosesched").click();
}





function goService(){
    
    localStorage.setItem("navigation","stepUser");
    window.location.href = "./services.html#stepUser";


}


if (accountName) {
    accountName.innerHTML = JSON.parse(localStorage.getItem('name'));

    // alert(accountName.innerHTML);

    if (accountName.innerHTML == "" || (accountName.innerHTML == null) || (accountName.innerHTML == "Undefined")) {

        alert("You are welcome as Guest");
        document.getElementById("userPane").style.display = "none";
        accountSession = "Guest";


    } else {

        alert("Welcome To RideXChange!");
        document.getElementById("userPane").style.display = "block";
        accountSession = "User";



    }


}


// events
if (createBtn) createBtn.addEventListener('click', createAccount);
if (loginBtn) loginBtn.addEventListener('click', loginAccount);
if (sellBtn) sellBtn.addEventListener('click', sellCar);
if (logoutBtn) logoutBtn.addEventListener('click', logoutAcc);
if (searchBtn) searchBtn.addEventListener('click', search);
if (BtnGetStarted) BtnGetStarted.addEventListener('click', goService);
if (BtnProcessSched) BtnProcessSched.addEventListener('click', InitiateSchedProcess);





// append data from json file
let cars = [
    {
        carBrand: "Toyota",
        model: "Wigo",
        year: "2016",
        color: "White",
        trans: "Auto",
        fuel: "Diesel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus a massa mollis accumsan. Ut eget nisi vel risus tincidunt faucibus.",
        price: "250,000",
        image: "toyotawigo.jpg"
    },
    {
        carBrand: "Toyota",
        model: "Inova",
        year: "2015",
        color: "White",
        trans: "Manual",
        fuel: "Diesel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus a massa mollis accumsan. Ut eget nisi vel risus tincidunt faucibus.",
        price: "300,000",
        image: "toyotainova.jpg"
    },
    {
        carBrand: "Isuzu",
        model: "D-max",
        year: "2015",
        color: "Black",
        trans: "Manual",
        fuel: "Diesel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus a massa mollis accumsan. Ut eget nisi vel risus tincidunt faucibus.",
        price: "500,000",
        image: "isuzudmax.jpg"
    },
    {
        carBrand: "Mitsubishi",
        model: "Montero Sport",
        year: "2019",
        color: "Black",
        trans: "Manual",
        fuel: "Diesel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus a massa mollis accumsan. Ut eget nisi vel risus tincidunt faucibus.",
        price: "550,000",
        image: "monterosport.jpg"
    },
    {
        carBrand: "Ford",
        model: "Raptor",
        year: "2018",
        color: "Blue",
        trans: "Manual",
        fuel: "Diesel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus a massa mollis accumsan. Ut eget nisi vel risus tincidunt faucibus.",
        price: "550,000",
        image: "fordraptor.jpg"
    }
]

cars.forEach(item => {
    let newDiv = document.createElement('div');
    newDiv.className = "card-item";
    newDiv.innerHTML = `<div class="card-item">
                                <div class="card">
                                <img src="assets/images/${item.image}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title mb-3">${item.carBrand} ${item.model}</h5>
                                    <p>Price: ${item.price}</p>
                                    <p>Year: ${item.year}</p>
                                    <p>Color: ${item.color}</p>
                                    <p>Transmission: ${item.trans}</p>
                                    <p>Fuel: ${item.fuel}</p>
                                    <p class="card-text">${item.description}</p>
                                    <button data-bs-toggle="modal" data-bs-target="#userSched">Test Drive</button>
                                    </div>
                                </div>
                            </div>`;
    if (cardItemContainer) cardItemContainer.appendChild(newDiv);
})

// append data from local storage
let carData = JSON.parse(localStorage.getItem("cars"));

if (carData) {
    carData.forEach(item => {
        let newDiv = document.createElement('div');
        newDiv.className = "card-item"
        newDiv.innerHTML = `<div class="card-item">
                                <div class="card">
                                <img src="${item.carphoto}" class="card-img-top" alt="Car 1">
                                <div class="card-body">
                                    <h5 class="card-title">${item.carbrand} ${item.carmodel}</h5>
                                    <p>Price: ${item.carprice}</p>
                                    <p>Year: ${item.caryear}</p>
                                    <p>Color: ${item.carcolor}</p>
                                    <p>Transmission: ${item.cartrans}</p>
                                    <p>Fuel: ${item.carfuel}</p>
                                    <p>Description: ${item.cardescription}</p>
                                    <button data-bs-toggle="modal" data-bs-target="#userSched">Test Drive</button>
                                    </div>
                                </div>
                            </div>`

        if (cardItemContainer) cardItemContainer.appendChild(newDiv);
    });
}

// search car
function search() {
    let filteredCar = cars.filter(car => car.carBrand === searchInput.value || car.model === searchInput.value)
    cardItemContainer.innerHTML = "";
    filteredCar.forEach((item) => {
        let newDiv = document.createElement('div');
        newDiv.className = "card-item";
        newDiv.innerHTML = `<div class="card-item">
                                    <div class="card">
                                    <img src="assets/images/${item.image}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">${item.carBrand} ${item.model}</h5>
                                        <p>Price: ${item.price}</p>
                                        <p>Year: ${item.year}</p>
                                        <p>Color: ${item.color}</p>
                                        <p>Transmission: ${item.trans}</p>
                                        <p>Fuel: ${item.fuel}</p>
                                        <p class="card-text">${item.description}</p>
                                        <button data-bs-toggle="modal" data-bs-target="#userSched">Test Drive</button>
                                    </div>
                                    </div>
                                </div>`;
        cardItemContainer.appendChild(newDiv);
    })

    if (carData) {
        let carList = carData.filter(car => car.carbrand === searchInput.value || car.carmodel === searchInput.value)
    
        carList.forEach((item) => {
            let newDiv = document.createElement('div');
            newDiv.className = "card-item"
            newDiv.innerHTML = `<div class="card-item">
                                    <div class="card">
                                    <img src="${item.carphoto}" class="card-img-top" alt="Car 1">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.carbrand} ${item.carmodel}</h5>
                                        <p>Price: ${item.carprice}</p>
                                        <p>Year: ${item.caryear}</p>
                                        <p>Color: ${item.carcolor}</p>
                                        <p>Transmission: ${item.cartrans}</p>
                                        <p>Fuel: ${item.carfuel}</p>
                                        <p>Description: ${item.cardescription}</p>
                                        <button data-bs-toggle="modal" data-bs-target="#userSched">Test Drive</button>
                                    </div>
                                    </div>
                                </div>`
    
            if (cardItemContainer) cardItemContainer.appendChild(newDiv);
        })
    }
    

}




// search car

