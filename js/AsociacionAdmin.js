window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    console.log("CODIGO_PROLOG:", CodigoProlog); // Verifica el contenido de CODIGO_PROLOG
    let lineas = CodigoProlog.split('\n');
    console.log("Lineas:", lineas); // Verifica si se divide correctamente
    let facultades = new Set();
    let carreras = new Set();
    let aptitudes = new Set();
    let asociacionesFacCarr = [];
    let asociacionesCarApt = [];

    lineas.forEach(linea => {
        if (linea.startsWith("facultad(")) {
            facultades.add(extraerDato(linea));
        } else if (linea.startsWith("carrera(")) {
            let [facultad, carrera] = extraerDosDatos(linea);
            carreras.add(carrera);
            asociacionesFacCarr.push({ facultad, carrera });
        } else if (linea.startsWith("aptitud(")) {
            aptitudes.add(extraerDato(linea));
        } else if (linea.startsWith("carrera_aptitud(")) {
            let [carrera, aptitud] = extraerDosDatos(linea);
            asociacionesCarApt.push({ carrera, aptitud });
        }
    });

    poblarSelect("selectFacultad", facultades);
    poblarSelect("selectCarrera", carreras);
    poblarSelect("selectCarreraApt", carreras);
    poblarSelect("selectAptitud", aptitudes);
    actualizarLista("listaAsociacionesFacCarr", asociacionesFacCarr, "facultad", "carrera");
    actualizarLista("listaAsociacionesCarApt", asociacionesCarApt, "carrera", "aptitud");
}

function extraerDato(linea) {
    return linea.match(/\(([^)]+)\)/)[1].trim();
}

function extraerDosDatos(linea) {
    let match = linea.match(/\(([^,]+),\s*([^)]+)\)/);
    return match ? [match[1].trim(), match[2].trim()] : ["", ""];
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
        let nuevaLinea = `\ncarrera(${facultad}, ${carrera}).`;
        agregarAsociacion(nuevaLinea);
    }
}

function asociarCarreraAptitudDesdeUI() {
    let carrera = document.getElementById("selectCarreraApt").value;
    let aptitud = document.getElementById("selectAptitud").value;
    if (carrera && aptitud) {
        let nuevaLinea = `\ncarrera_aptitud(${carrera}, ${aptitud}).`;
        agregarAsociacion(nuevaLinea);
    }
}

function agregarAsociacion(nuevaLinea) {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";

    if (!CodigoProlog.includes(nuevaLinea.trim())) {
        CodigoProlog += nuevaLinea;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
        cargarDatosDesdeSessionStorage();
    } else {
        console.log("La asociación ya existe, no se agregará duplicada.");
    }
}
