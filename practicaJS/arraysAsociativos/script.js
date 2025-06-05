// Objeto que simula un array asociativo
const arrayAsociativo = {};

function agregarElemento() {
    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;

    if (clave && valor) {
        arrayAsociativo[clave] = valor;
        document.getElementById("clave").value = "";
        document.getElementById("valor").value = "";
        mostrarElementos();
    } else {
        alert("¡Debes ingresar clave y valor!");
    }
}

function buscarElemento() {
    const clave = document.getElementById("clave").value;
    const resultadoDiv = document.getElementById("resultado");

    if (clave && arrayAsociativo.hasOwnProperty(clave)) {
        resultadoDiv.innerHTML = `<strong>${clave}:</strong> ${arrayAsociativo[clave]}`;
    } else {
        resultadoDiv.innerHTML = "¡Clave no encontrada!";
    }
}

function mostrarElementos() {
    const listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = "<h3>Elementos almacenados:</h3>";

    for (const clave in arrayAsociativo) {
        listaDiv.innerHTML += `
            <div class="item">
                <strong>${clave}:</strong> ${arrayAsociativo[clave]}
            </div>
        `;
    }
}