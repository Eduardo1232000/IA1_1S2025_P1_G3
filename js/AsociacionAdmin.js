window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    console.log("CODIGO_PROLOG:", CodigoProlog); // Verifica el contenido de CODIGO_PROLOG
    
    // Cargar las listas desde sessionStorage
    let facultades = new Set(JSON.parse(sessionStorage.getItem("FACULTAD_UNICO") || "[]"));
    let carreras = new Set(JSON.parse(sessionStorage.getItem("CARRERA") || "[]"));
    let aptitudes = new Set(JSON.parse(sessionStorage.getItem("APTITUD_UNICO") || "[]"));
    let preferencia_unica = new Set(JSON.parse(sessionStorage.getItem("PREFERENCIA_UNICA") || "[]"));
    let asociacionesFacCarr = JSON.parse(sessionStorage.getItem("FACULTAD") || "[]");
    let asociacionesCarApt = JSON.parse(sessionStorage.getItem("APTITUD") || "[]");
    let asociacionesPrefCar = JSON.parse(sessionStorage.getItem("PREFERENCIA") || "[]");
    console.log(asociacionesPrefCar)
    // Poblar los select
    poblarSelect("selectFacultad", [...facultades]);
    poblarSelect("selectCarrera", [...carreras]);
    poblarSelect("selectCarreraApt", [...carreras]);
    poblarSelect("selectCarreraPrf", [...carreras]);
    poblarSelect("selectAptitud", [...aptitudes]);
    poblarSelect("selectPreferencia", [...preferencia_unica]);

    // Actualizar las listas de asociaciones
    actualizarLista("FACULTAD", asociacionesFacCarr, "facultad", "carrera");
    actualizarLista("APTITUD", asociacionesCarApt, "carrera", "aptitud");
    actualizarLista("PREFERENCIA", asociacionesPrefCar, "preferencia", "carrera");
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
    let facultad = document.getElementById("selectFacultad").value;
    let carrera = document.getElementById("selectCarrera").value;
    if (facultad && carrera) {
        let nuevaLinea = { facultad, carrera };
        agregarAsociacion(nuevaLinea, "FACULTAD");
    }
}

function asociarCarreraAptitudDesdeUI() {
    let carrera = document.getElementById("selectCarreraApt").value;
    let aptitud = document.getElementById("selectAptitud").value;
    if (carrera && aptitud) {
        let nuevaLinea = { carrera, aptitud };
        agregarAsociacion(nuevaLinea, "APTITUD");
    }
}

function asociarCarreraPreferenciaDesdeUI() {
    let preferencia = document.getElementById("selectPreferencia").value;
    let carrera = document.getElementById("selectCarreraPrf").value;
    if (preferencia && carrera) {
        let nuevaLinea = { preferencia, carrera };
        agregarAsociacion(nuevaLinea, "PREFERENCIA");
    }
}

function agregarAsociacion(nuevaLinea, tipoAsociacion) {
    let asociaciones = JSON.parse(sessionStorage.getItem(tipoAsociacion) || "[]");

    // Verificar si la asociación ya existe
    let existe = asociaciones.some(asoc => {
        if (tipoAsociacion === "FACULTAD") {
            return asoc.facultad === nuevaLinea.facultad && asoc.carrera === nuevaLinea.carrera;
        } else if (tipoAsociacion === "APTITUD") {
            return asoc.carrera === nuevaLinea.carrera && asoc.aptitud === nuevaLinea.aptitud;
        }else if (tipoAsociacion === "PREFERENCIA") {
            return asoc.preferencia === nuevaLinea.preferencia && asoc.carrera === nuevaLinea.preferencia;
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