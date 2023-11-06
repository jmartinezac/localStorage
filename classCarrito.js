class Carrito {
  constructor(productos) {
    this.productos = productos;
    this.itemsSelecionados = [];
  }

  agregarItem(id) {
    console.log("Llegue a la clase");
    this.itemsSelecionados.push(this.productos[id]);
    this.mostrarItems();
  }
  eliminarItem(id) {
    this.mostrarItems();
  }
  mostrarItems() {
    console.log("legue a mostar");
    let productoHTML = "";
    for (let i = 0; i < this.itemsSelecionados.length; i++) {
      console.log("Llegue al for de la clase");
      let productoBaseHTML = `<li class="list-group-item d-flex flex-row justify-content-evenly">
        <img src="${this.itemsSelecionados[i].image}" class="img-item" alt="">
        <p>$${this.itemsSelecionados[i].price}</p>
        <button type="button" class="btn btn-danger btn-carrito-del">Eliminar</button>
      </li>`;
      productoHTML += productoBaseHTML;
      console.log(productoHTML);
    }
    document.getElementById("list-carrito").innerHTML = productoHTML;
  }
}
