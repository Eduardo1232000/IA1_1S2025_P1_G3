window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    console.log("CODIGO_PROLOG:", CodigoProlog); // Verifica el contenido de CODIGO_PROLOG
    
    // Cargar las listas desde sessionStorage
    let carreras = new Set(JSON.parse(sessionStorage.getItem("CARRERA") || "[]"));
    //interes
    let intereses = new Set(JSON.parse(sessionStorage.getItem("INTERES_UNICO")|| "[]"));
    let asociacionesCARINT = JSON.parse(sessionStorage.getItem("INTERES") || "[]");

    // habilidad
    let habilidades = new Set(JSON.parse(sessionStorage.getItem("HABILIDAD_UNICA")|| "[]"));
    let asociacionesCARHAB = JSON.parse(sessionStorage.getItem("HABILIDAD") || "[]");
    console.log(habilidades)
    // Poblar los select
    poblarSelect("selectCarrera", [...carreras]);
    poblarSelect("selectInteres", [...intereses]);
    poblarSelect("selectCarreraHabilidad", [...carreras]);
    poblarSelect("selectHabilidad", [...habilidades]);
    // Actualizar las listas de asociaciones
    actualizarLista("listaAsociacionCarreraInteres", asociacionesCARINT, "carrera", "interes");

    actualizarLista("listaAsociacionCarreraHabilidad", asociacionesCARHAB, "carrera", "habilidad");
}

function poblarSelect(id, elementos) {
    let select = document.getElementById(id);
    if (!select) return;
    select.innerHTML = "";
    elementos.forEach(el => {
        let option = document.createElement("option");
        option.value = el;
        option.textContent = el;
        select.appendChild(option);
    });
}

function actualizarLista(idLista, asociaciones, clave1, clave2) {
    let lista = document.getElementById(idLista);
    if (!lista) return;
    lista.innerHTML = "";
    asociaciones.forEach(asoc => {
        let item = document.createElement("li");
        item.textContent = `${asoc[clave1]} - ${asoc[clave2]}`;
        lista.appendChild(item);
    });
}

function asociarFacultadCarreraDesdeUI() {
    let carrera = document.getElementById("selectCarrera").value;
    let interes = document.getElementById("selectInteres").value;
    if (carrera && interes) {
        let nuevaLinea = { carrera, interes };
        agregarAsociacion(nuevaLinea, "INTERES");
    }
}

function asociarCarreraHabilidadDesdeUI() {
    let carrera = document.getElementById("selectCarreraHabilidad").value;
    let habilidad = document.getElementById("selectHabilidad").value;
    if (carrera && habilidad) {
        let nuevaLinea = { carrera, habilidad };
        agregarAsociacion(nuevaLinea, "HABILIDAD");
    }
}

function asociarCarreraSeccionDesdeUI() {
    let carrera = document.getElementById("selectCarrera").value;
    let seccion = document.getElementById("selectFacultadSec").value;
    if (carrera && seccion) {
        let nuevaLinea = { carrera, seccion };
        agregarAsociacion(nuevaLinea, "CARRERA_SECCION");
    }
}

function agregarAsociacion(nuevaLinea, tipoAsociacion) {
    let asociaciones = JSON.parse(sessionStorage.getItem(tipoAsociacion) || "[]");

    // Verificar si la asociación ya existe
    let existe = asociaciones.some(asoc => {
        if (tipoAsociacion === "FACULTAD_CARRERA") {
            return asoc.facultad === nuevaLinea.facultad && asoc.carrera === nuevaLinea.carrera;
        } else if (tipoAsociacion === "CARRERA_HABILIDAD") {
            return asoc.carrera === nuevaLinea.carrera && asoc.habilidad === nuevaLinea.habilidad;
        } else if (tipoAsociacion === "CARRERA_SECCION") {
            return asoc.carrera === nuevaLinea.carrera && asoc.seccion === nuevaLinea.seccion;
        }
        return false;
    });

    if (!existe) {
        asociaciones.push(nuevaLinea);
        sessionStorage.setItem(tipoAsociacion, JSON.stringify(asociaciones));
        cargarDatosDesdeSessionStorage();  // Recargar los datos para actualizar la UI
    } else {
        console.log("La asociación ya existe, no se agregará duplicada.");
    }
}

function AccionSiguiente() {
    console.log("Datos guardados en sessionStorage");
}
