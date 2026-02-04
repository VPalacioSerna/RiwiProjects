
const containerDetalles = document.querySelector('.container-detalles');

document.addEventListener('DOMContentLoaded', () => {
    const productoJSON = localStorage.getItem('detalleProducto');

    const producto = JSON.parse(productoJSON);

    containerDetalles.innerHTML = `
    <div class="container my-5" >
            <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div class="row g-0">
                    
                    <div class="col-12 col-lg-6 bg-light d-flex align-items-center justify-content-center p-4 p-md-5">
                        <div class="position-relative bg-white p-3 rounded-4 shadow-sm d-flex justify-content-center" >
                            <img src="${producto.img}" class="img-fluid rounded-3" alt="">
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex align-items-center">
                        <div class="card-body p-4 p-md-5">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <small class="text-success fw-bold ls-wide" style="font-size: 0.75rem;">${producto.brand}</small>
                                <a href="./landing.html" class="btn btn-success text-dark fw-bold text-decoration-none">Go back</a>
                            </div>
                            <h1 class="fw-bold mt-2 mb-3">${producto.name}</h1>
                            
                            <div class="d-flex align-items-center mb-4">
                                <div class="text-warning me-2">
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                </div>
                            </div>

                            <div class="mb-4">
                                <span class="fs-2 fw-bold me-2">$${producto.price}</span>
                            </div>                

                            <div class="row mt-5 mb-2 d-flex justify-content-start">      

                                <div class="col-4">
                                    <button class="btn py-1 rounded-3 shadow-sm border-1 " 
                                            style="border-color: #00ff7f; color: #000;">
                                        <i class="bi bi-heart mx-1"></i> WISHLIST
                                    </button>
                                </div>
                                <div class="col-3 ">
                                    <button class="btn py-1 rounded-3 shadow-sm border-1" 
                                            style="border-color: #00ff7f; color: #000;">
                                        <i class="bi bi-share mx-2"></i> SHARE
                                    </button>
                                </div>

                                <div class="col-5">
                                    <button class="btn py-1 rounded-3 shadow-sm border-1 d-flex align-items-center m-auto" 
                                            style="border-color: #00ff7f; color: #000;"
                                            onclick="window.open('https://wa.me/573012671400?text=Hola! Quiero la Elite Performance Racket')">
                                        <i class="bi bi-whatsapp me-2"></i> WHATSAPP
                                    </button>
                                </div>

                            </div>                     
                        </div>
                    </div>
                </div>

                <div class="card-footer bg-white p-4 p-md-5 border-top border-light">
                    <h5 class="fw-bold mb-3 text-uppercase small" style="letter-spacing: 1px;">Product Description</h5>
                    <p class="text-muted lh-lg mb-0">${producto.description}</p>
                </div>
            </div>
        </div>`
})
