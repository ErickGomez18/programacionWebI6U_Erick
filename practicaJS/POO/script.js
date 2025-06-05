// Base de datos de estudiantes (array de objetos)
const estudiantes = [];

// Constructor de objetos "Estudiante"
function Estudiante(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    
    // Método del objeto
    this.mostrarInfo = function() {
        return `${this.nombre} (${this.edad} años) - ${this.carrera}`;
    };
}

// Agrega un nuevo estudiante
function agregarEstudiante() {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const carrera = document.getElementById("carrera").value;

    if (nombre && !isNaN(edad) && carrera) {
        const nuevoEstudiante = new Estudiante(nombre, edad, carrera);
        estudiantes.push(nuevoEstudiante);
        actualizarTabla();
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("carrera").value = "";
    } else {
        alert("⚠️ Completa todos los campos correctamente.");
    }
}

// Busca un estudiante por nombre
function buscarEstudiante() {
    const nombreBusqueda = document.getElementById("nombre").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("resultado-busqueda");

    if (nombreBusqueda) {
        const encontrado = estudiantes.find(est => 
            est.nombre.toLowerCase().includes(nombreBusqueda)
        );

        if (encontrado) {
            resultadoDiv.innerHTML = `🔍 <strong>Resultado:</strong> ${encontrado.mostrarInfo()}`;
        } else {
            resultadoDiv.innerHTML = "❌ No se encontró al estudiante.";
        }
    } else {
        resultadoDiv.innerHTML = "⚠️ Ingresa un nombre para buscar.";
    }
}

// Actualiza la tabla con los estudiantes
function actualizarTabla() {
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = "";

    estudiantes.forEach(estudiante => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.carrera}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}