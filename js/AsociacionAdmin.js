window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    console.log("CODIGO_PROLOG:", CodigoProlog); // Verifica el contenido de CODIGO_PROLOG
    
    // Cargar las listas desde sessionStorage
    let facultades = new Set(JSON.parse(sessionStorage.getItem("FACULTAD") || "[]"));
    let carreras = new Set(JSON.parse(sessionStorage.getItem("CARRERA") || "[]"));
    let aptitudes = new Set(JSON.parse(sessionStorage.getItem("APTITUD") || "[]"));
    let asociacionesFacCarr = JSON.parse(sessionStorage.getItem("FACULTAD_CARRERA") || "[]");
    let asociacionesCarApt = JSON.parse(sessionStorage.getItem("CARRERA_APTITUD") || "[]");

    // Poblar los select
    poblarSelect("selectFacultad", [...facultades]);
    poblarSelect("selectCarrera", [...carreras]);
    poblarSelect("selectCarreraApt", [...carreras]);
    poblarSelect("selectAptitud", [...aptitudes]);

    // Actualizar las listas de asociaciones
    actualizarLista("listaAsociacionesFacCarr", asociacionesFacCarr, "facultad", "carrera");
    actualizarLista("listaAsociacionesCarApt", asociacionesCarApt, "carrera", "aptitud");
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
        agregarAsociacion(nuevaLinea, "FACULTAD_CARRERA");
    }
}

function asociarCarreraAptitudDesdeUI() {
    let carrera = document.getElementById("selectCarreraApt").value;
    let aptitud = document.getElementById("selectAptitud").value;
    if (carrera && aptitud) {
        let nuevaLinea = { carrera, aptitud };
        agregarAsociacion(nuevaLinea, "CARRERA_APTITUD");
    }
}

function agregarAsociacion(nuevaLinea, tipoAsociacion) {
    let asociaciones = JSON.parse(sessionStorage.getItem(tipoAsociacion) || "[]");

    // Verificar si la asociación ya existe
    let existe = asociaciones.some(asoc => {
        if (tipoAsociacion === "FACULTAD_CARRERA") {
            return asoc.facultad === nuevaLinea.facultad && asoc.carrera === nuevaLinea.carrera;
        } else if (tipoAsociacion === "CARRERA_APTITUD") {
            return asoc.carrera === nuevaLinea.carrera && asoc.aptitud === nuevaLinea.aptitud;
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
