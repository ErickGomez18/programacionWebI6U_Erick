function generarCurp() {
    // Obtener los datos **dentro** de la función
    let nombre = document.getElementById("NombreIn").value;
    let primerApellido = document.getElementById("primerApellidoIn").value;
    let segundoApellido = document.getElementById("segundoApellidoIn").value;
    let fechaNacimiento = document.getElementById("fechaNacimientoIn").value;

    // Obtener género seleccionado
    let genero = document.querySelector('input[name="genero"]:checked');
    let generoSeleccionado = genero ? genero.value : "No seleccionado";

    let entidadFederativa = document.getElementById("entidadFedIn").value;

    // Verificar que todos los campos estén completos
    if (!nombre || !primerApellido || !fechaNacimiento || !generoSeleccionado || !entidadFederativa) {
        alert("Por favor, complete todos los campos.");
        return; // Salir si algún campo está vacío
    }

    // Generación de CURP
    primerApellido = primerApellido.slice(0, 2).toUpperCase(); // Tomar dos primeras letras del primer apellido
    nombre = nombre.slice(0, 1).toUpperCase(); // Tomar primera letra del nombre

    let [anio, mes, dia] = fechaNacimiento.split("-"); // Extraer los valores de la fecha

    let anioCurp = anio.slice(2, 4); // Obtener los últimos dos dígitos del año
    let entidadFed = obtenerIniciales(entidadFederativa); // Obtener las iniciales de la entidad federativa

    // Averiguar consonante
    let averiguaConsonante = esConsonante(segundoApellido);

    // Generar CURP
    let curp = primerApellido + nombre + anioCurp + mes + dia + entidadFed + generoSeleccionado + averiguaConsonante;

    // Mostrar la CURP si es válida
    if (averiguaConsonante !== false) {
        alert('Tu nueva CURP es: ' + curp);
    } else {
        alert('No se encontró una consonante válida en el segundo apellido.');
    }
}

// Verificar consonante
function esConsonante(segundoApellido) {
    const consonante = /^[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]$/;
    for (let index = 0; index < segundoApellido.length; index++) {
        if (consonante.test(segundoApellido.charAt(index))) {
            return segundoApellido.charAt(index); // Retornar la consonante encontrada
        }
    }
    return false;
}

// Obtener las iniciales de la entidad federativa
function obtenerIniciales(entidad) {
    // Eliminar espacios en blanco antes y después
    let palabras = entidad.trim().split(/\s+/); 
    // Tomar la primera letra de cada palabra y unirlas en mayúsculas
    // let iniciales = palabras.map(palabra => palabra.charAt(0).toUpperCase()).join('');
    let iniciales = palabras[0].substring(0, 2).toUpperCase();
    console.log(iniciales);
    return iniciales;
}
