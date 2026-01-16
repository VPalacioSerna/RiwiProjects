//title, subtitle, image, imageLogoGas, imageLogoTypeCar, imageLogoQuantityPeople, price, buttonRent

let carticas = [
    {
        title : "Koenigsegg",
        subtitle : "Sport",
        image : "./img/img-card (7).png",
        imageLogoGas : "./img/gas-station.png",
        textLogoGas : "90L",
        imageLogoTypeCar : "./img/Car.png",
        textLogoTypeCar :"Manual",
        imageLogoQuantityPeople : "./img/profile-2user.png",
        textLogoQuantityPeople : "2 People",
        price : "$99.00/day",
        buttonRent : "Rent Now",
        typeCar : "popular"
    },
    {
        title : "Nissan GT - R",
        subtitle : "Sport",
        image : "../img/img-card (7).png",
        imageLogoGas : "../img/gas-station.png",
        textLogoGas : "90L",
        imageLogoTypeCar : "../img/Car.png",
        textLogoTypeCar :"Manual",
        imageLogoQuantityPeople : "../img/profile-2user.png",
        textLogoQuantityPeople : "2 People",
        price : "$99.00/day",
        buttonRent : "Rent Now",
        typeCar : "popular"
    },
    {
        title : "Rolls - Royce",
        subtitle : "Sedan",
        image : "../img/img-card (7).png",
        imageLogoGas : "../img/gas-station.png",
        textLogoGas : "90L",
        imageLogoTypeCar : "../img/Car.png",
        textLogoTypeCar :"Manual",
        imageLogoQuantityPeople : "../img/profile-2user.png",
        textLogoQuantityPeople : "2 People",
        price : "$99.00/day",
        buttonRent : "Rent Now",
        typeCar : "popular"
    },
    {
        title : "Nissan GT - R",
        subtitle : "Sport",
        image : "../img/img-card (7).png",
        imageLogoGas : "../img/gas-station.png",
        textLogoGas : "90L",
        imageLogoTypeCar : "../img/Car.png",
        textLogoTypeCar :"Manual",
        imageLogoQuantityPeople : "../img/profile-2user.png",
        textLogoQuantityPeople : "2 People",
        price : "$99.00/day",
        buttonRent : "Rent Now",
        typeCar : "popular"
    },
    {
        title : "Nissan GT - R",
        subtitle : "Sport",
        image : "../img/img-card (7).png",
        imageLogoGas : "../img/gas-station.png",
        textLogoGas : "90L",
        imageLogoTypeCar : "../img/Car.png",
        textLogoTypeCar :"Manual",
        imageLogoQuantityPeople : "../img/profile-2user.png",
        textLogoQuantityPeople : "2 People",
        price : "$99.00/day",
        buttonRent : "Rent Now",
        typeCar : "recomendation"
    },
    {
        title : "Nissan GT - R",
        subtitle : "Sport",
        image : "../img/img-card (7).png",
        imageLogoGas : "../img/gas-station.png",
        textLogoGas : "90L",
        imageLogoTypeCar : "../img/Car.png",
        textLogoTypeCar :"Manual",
        imageLogoQuantityPeople : "../img/profile-2user.png",
        textLogoQuantityPeople : "2 People",
        price : "$99.00/day",
        buttonRent : "Rent Now",
        typeCar : "recomendation"
    }    
]

rowPopular = document.getElementById('popular');
rowRecomendation = document.getElementById('recomendation');

carticas.forEach(cartica => {
    templateCard = `
<div class="col-md-3 col-sm-6 col-xs-12 mt-3">
    <div class="card h-100 text-center rounded-4 overflow-hidden">                            
        <div class="card-body d-flex flex-column">                                
            <h5 class="card-title d-flex justify-content-right">${cartica.title}</h5>
            <div class="d-flex justify-content-between mb-4">
                <h6 class="card-subtitle mb-0 text-muted ">${cartica.subtitle}</h6>
                <span class="text-danger "><i class="fa-solid fa-heart"></i></span>
            </div>                                    
            <div class="d-flex flex-grow position-relative img-cards text-center mb-4">
                <img src="${cartica.image}" class="img-fluid" alt="">
            </div>
            <div class="mt-auto">
                <div class="d-flex justify-content-center align-items-center gap-4 mb-4 mt-4 text-muted small">
                    <div class="text-center">
                        <img src="${cartica.imageLogoGas}" alt="">
                        <span>${cartica.textLogoGas}</span>
                    </div>
                    <div class="text-center">
                        <img src="${cartica.imageLogoTypeCar}" alt="">
                        <span>${cartica.textLogoTypeCar}</span>
                    </div>
                    <div class="text-center">
                        <img src="${cartica.imageLogoQuantityPeople}" alt="">
                        <span>${cartica.textLogoQuantityPeople}</span>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <h4 class="text-dark fw-semibold fs-5 text-primary mb-0 ">${cartica.price}</h4>
                <button class="btn btn-primary rounded-2">${cartica.buttonRent}</button>
            </div>
        </div>
    </div>
</div> `;

if (cartica.typeCar == "popular") {
    rowPopular.innerHTML += templateCard  
} else {
    rowRecomendation.innerHTML += templateCard
}

});



