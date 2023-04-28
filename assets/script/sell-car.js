function sellCar() {
    let carBrand = document.querySelector("#carBrand");
    let carModel = document.querySelector('#carModel');
    let carColor = document.querySelector('#carColor');
    let carDescription = document.querySelector("#carDescription");
    let carPhoto = document.querySelector("#carPhoto");
    let cardItemContainer = document.querySelector('.card-item-container');

    let file = carPhoto.files[0];
    let reader = new FileReader();

    if (carBrand.value === "" || carModel.value === "" || carColor.value === "" || carDescription.value === "" || carPhoto.value === "") {
        alert("Please complete the car info.")
    } else {
        reader.onload = () => {
            let dataUrl = reader.result;
      
            // Save data to local storage
            let carData = {
            carbrand: carBrand.value,
            carmodel: carModel.value,
            caryear: year.value,
            carcolor: carColor.value,
            cartrans: trans.value,
            carfuel: fuel.value,
            carphoto: dataUrl,
            carprice: carPrice.value,
            cardescription: carDescription.value,
            }
      
            alert('Car Posted')
            let carDataString = localStorage.getItem('cars');
            let cars = carDataString ? JSON.parse(carDataString): [];
            cars.push(carData);
            localStorage.setItem("cars", JSON.stringify(cars));
                    
            let newDiv = document.createElement('div');
            newDiv.className = "card-item";
            newDiv.innerHTML = `<div class="card-item">
                                <div class="card">
                                <img src="${dataUrl}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${carBrand.value} ${carModel.value}</h5>
                                    <p>Price: ${carPrice.value}</p>
                                    <p>Year: ${year.value}</p>
                                    <p>Color: ${carColor.value}</p>
                                    <p>Transmission: ${trans.value}</p>
                                    <p>Fuel: ${fuel.value}</p>
                                    <p class="card-text">${carDescription.value}</p>
                                    <button data-bs-toggle="modal" data-bs-target="#userSched">Test Drive</button>
                                    </div>
                                </div>
                            </div>`
      
            cardItemContainer.appendChild(newDiv);

            
                carBrand.value = "";
                carModel.value = "";
                carColor.value = "";
                carDescription.value = "";
                carPhoto.value = "";
                cardItemContainer.value = "";
                document.getElementById("sellaCarBtn").click();
        
         

          }
    }

    reader.readAsDataURL(file)

    // location.reload();
    




};





export default sellCar;