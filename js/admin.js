let session = pl.create(1000);
let CodigoProlog = "";

window.onload = function () {
    validar_codigo_prolog();
    if (sessionStorage.getItem("CODIGO_PROLOG")) {
        cargarDatosDesdeSessionStorage();
    }
};

// ✅ Función para validar y mostrar el código Prolog
function validar_codigo_prolog() {
    try {
        CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG");
        if (!CodigoProlog) {
            console.log("No hay código almacenado o está vacío.");
            return;
        }
        console.log("HAY CÓDIGO ALMACENADO:", CodigoProlog);
        document.getElementById("STATUS_PROLOG").style.backgroundColor = "green";
        procesarCodigoProlog(CodigoProlog);  // ✅ Procesa los datos después de cargarlos
    } catch (error) {
        console.log("ERROR AL OBTENER CÓDIGO PROLOG", error);
    }
}

// ✅ Función para cargar archivo Prolog
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function (e) {
        CodigoProlog = e.target.result;
        session = pl.create(1000);
        session.consult(CodigoProlog, {
            success: function () {
                console.log("ÉXITO AL CARGAR");
                document.getElementById("STATUS_PROLOG").style.backgroundColor = "green";
                sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
                console.log("CODIGO_PROLOG guardado en sessionStorage:", CodigoProlog);
                procesarCodigoProlog(CodigoProlog); // ✅ Procesar datos después de cargarlos
            },
            error: function (err) {
                console.log("Error al cargar el código: " + err);
            }
        });
    };
    reader.readAsText(file);
});

// ✅ Función para procesar Código Prolog y extraer datos
function procesarCodigoProlog(codigo) {
    let facultades = [], carreras = [], aptitudes = [];

    let lineas = codigo.split("\n");
    lineas.forEach(linea => {
        linea = linea.trim();
        if (linea.startsWith("facultad(")) {
            let facultad = linea.match(/facultad\((.*?)\)/);
            if (facultad) facultades.push(facultad[1].slice(1, -1));
        } else if (linea.startsWith("carrera(")) {
            let carrera = linea.match(/carrera\((.*?),\s*(.*?)\)/);
            if (carrera) carreras.push({ facultad: carrera[1], nombre: carrera[2].slice(0, -1) });
        } else if (linea.startsWith("aptitud(")) {
            let aptitud = linea.match(/aptitud\((.*?)\)/);
            if (aptitud) aptitudes.push(aptitud[1].slice(1, -1));
        }
    });

    // ✅ Guardar en sessionStorage
    sessionStorage.setItem("FACULTADES", JSON.stringify(facultades));
    sessionStorage.setItem("CARRERAS", JSON.stringify(carreras));
    sessionStorage.setItem("APTITUDES", JSON.stringify(aptitudes));

    // ✅ Actualizar la UI
    actualizarListaDesdeArray("listaFacultades", facultades);
    actualizarListaDesdeArray("listaCarreras", carreras.map(c => c.nombre));
    actualizarListaDesdeArray("listaAptitudes", aptitudes);
}

// ✅ Función para actualizar listas en la UI
function actualizarListaDesdeArray(idLista, elementos) {
    let lista = document.getElementById(idLista);
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos

    elementos.forEach(texto => {
        let item = document.createElement("li");
        item.textContent = texto;
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            lista.removeChild(item);
        };
        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
}

// ✅ Función para guardar datos en sessionStorage
function AccionSiguiente() {
    sessionStorage.setItem("FACULTADES", JSON.stringify(obtenerLista("listaFacultades")));
    sessionStorage.setItem("CARRERAS", JSON.stringify(obtenerLista("listaCarreras")));
    sessionStorage.setItem("APTITUDES", JSON.stringify(obtenerLista("listaAptitudes")));
    console.log("Datos guardados en sessionStorage");
}

// ✅ Funciones para obtener datos de la UI
function obtenerLista(idLista) {
    return [...document.getElementById(idLista).children].map(li => li.textContent.replace("❌", "").trim());
}
