let productos = [
  {
    name: "Zapato Casual",
    price: 180000,
    description: "Zapto casual para para cualquier ocasion",
    image: "./img/zapato_black.jpg",
  },
  {
    name: "Zapato Formal",
    price: 220000,
    description: "Zapato muyyy formal",
    image: "./img/zapato_formal.jpg",
  },
  {
    name: "Tennis Runnig",
    price: 300000,
    description: "Tennis Espciales para correr",
    image: "./img/tennis.jpg",
  },
];
function agregarProductos(id) {
  console.log("Hice Click en Agregar", id);
  shopProductos.agregarItem(id);
}
function mostrarProductos() {
  console.log("Mostrar");
  let productoHTML = "";
  for (let i = 0; i < productos.length; i++) {
    let productoBaseHTML = `
        <div class="col-sm-4 mb-3 mb-sm-0">
         <div class="card">
             <div>
                <img src=${productos[i].image} class="card-img-top";" alt="..." />
             </div>
                 <div class="card-body">
                    <h5 class="card-title">${productos[i].name}</h5>
                    <p class="card-text">${productos[i].price}</p>
                    <p class="card-text">${productos[i].description}</p>
                    <a href="#" class="btn btn-primary" onclick="agregarProductos(${i});">Agregar al Carrito</a>
                 </div>
            </div>
      </div>
      `;
    productoHTML += productoBaseHTML;
  }
  document.getElementById("catalogo").innerHTML = productoHTML;
}
mostrarProductos();

let shopProductos = new Carrito(productos);
