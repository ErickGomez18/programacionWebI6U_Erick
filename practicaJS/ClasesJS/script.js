// Clase Producto
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    // Método para mostrar información del producto
    mostrarInfo() {
        return `${this.nombre} - $${this.precio} (${this.categoria})`;
    }
}

// Array para almacenar los productos
const catalogo = [];

// Agrega un nuevo producto al catálogo
function agregarProducto() {
    const nombre = document.getElementById("nombre").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const categoria = document.getElementById("categoria").value;

    if (nombre && !isNaN(precio) && categoria) {
        const nuevoProducto = new Producto(nombre, precio, categoria);
        catalogo.push(nuevoProducto);
        actualizarTabla();
        document.getElementById("nombre").value = "";
        document.getElementById("precio").value = "";
    } else {
        alert("⚠️ Completa todos los campos correctamente.");
    }
}

// Filtra productos por categoría
function filtrarProductos() {
    const categoriaFiltro = document.getElementById("categoria").value;
    const resultadoDiv = document.getElementById("resultado-filtro");

    if (catalogo.length === 0) {
        resultadoDiv.innerHTML = "❌ No hay productos en el catálogo.";
        return;
    }

    const productosFiltrados = catalogo.filter(
        producto => producto.categoria === categoriaFiltro
    );

    if (productosFiltrados.length > 0) {
        resultadoDiv.innerHTML = `🔍 <strong>Filtrado:</strong> ${productosFiltrados.length} producto(s) en ${categoriaFiltro}`;
        mostrarProductosEnTabla(productosFiltrados);
    } else {
        resultadoDiv.innerHTML = `❌ No hay productos en la categoría "${categoriaFiltro}".`;
    }
}

// Muestra productos en la tabla (opcional: pasar array filtrado)
function actualizarTabla() {
    mostrarProductosEnTabla(catalogo);
}

function mostrarProductosEnTabla(productos) {
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = "";

    productos.forEach(producto => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.categoria}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}