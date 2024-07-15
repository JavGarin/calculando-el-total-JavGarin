// aqui el precio inicial del notebook
const precioInicial = 400000;

// seleciono los elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

// pongo el precio inicial en el HTML
precioSpan.innerHTML = precioInicial;

// las variables para cantidad y precio total
let cantidad = 0;
let precioTotal = 0;

// la función para actualizar el total a pagar
function actualizarTotal() {
    precioTotal = precioInicial * cantidad;
    valorTotalSpan.innerHTML = precioTotal;
}

// la función para incrementar la cantidad
function incrementar() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

// Función para disminuir la cantidad y if para evitar la variable disminuya por debajo de 0
function decrementar() {
    if (cantidad > 0) { 
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
}
