document.addEventListener("DOMContentLoaded", iniciarApp);

function iniciarApp(){
    const productoInput = document.getElementById('producto');
    const agrebarButton = document.getElementById('Agregar');
    const listaCompras = document.getElementById('lista-compras');

    let productos = [];

    agregarButton.addEventListener()('click', function(){
        agregarProducto(productos, productoInput, listaCompras);
    });
}

function agregarProducto(productos, productoInput, listaCompras){
    const nombreProducto = productoInput.value.trim();
    if(nombreProducto){
        const nuevoProducto = {
            nombre: nombreProducto,
            comprado: false
        };
        productos.push(nuevoProducto);

        productoInput.value = '';
    }
}

function mostrarProductos(producto, listaCompras){
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = producto.nombre;
    listaCompras.appendChild(nuevoItem)
}