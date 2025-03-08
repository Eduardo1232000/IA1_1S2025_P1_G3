window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let dias = new Set(JSON.parse(sessionStorage.getItem("DIA") || "[]"));
    let cursos = new Set(JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]"));
    let horasInicio = new Set(JSON.parse(sessionStorage.getItem("HORA") || "[]"));
    let horasFin = new Set(JSON.parse(sessionStorage.getItem("HORA") || "[]"));
    let secciones = new Set(JSON.parse(sessionStorage.getItem("SECCION_UNICO") || "[]"));
    let asociacionesCursosHorarios = JSON.parse(sessionStorage.getItem("HORARIO") || "[]"); // Cambio aquí
    console.log(sessionStorage.getItem("HORARIO"));

    // Poblar los select
    poblarSelect("selectDia", [...dias]);
    poblarSelect("selectCurso", [...cursos]);
    poblarSelect("selectHoraI", [...horasInicio]);
    poblarSelect("selectHoraF", [...horasFin]);
    poblarSelect("selectSeccion", [...secciones]);

    // Actualizar la lista de asociaciones
    actualizarLista("listaAsociacionesFacCarr", asociacionesCursosHorarios, "curso", "seccion");
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

function actualizarLista(idLista, asociaciones) {
    let lista = document.getElementById(idLista);
    if (!lista) return;
    lista.innerHTML = "";
    asociaciones.forEach(asoc => {
        let item = document.createElement("li");
        console.log(asoc)
        item.textContent = `${asoc.dia} , ${asoc.hora_inicio}, ${asoc.hora_fin} , ${asoc.seccion} , ${asoc.curso}`;
        lista.appendChild(item);
    });
}

function asociarFacultadCarreraDesdeUI() {
    let dia = document.getElementById("selectDia").value;
    let curso = document.getElementById("selectCurso").value;
    let horaInicio = document.getElementById("selectHoraI").value;
    let horaFin = document.getElementById("selectHoraF").value;
    let seccion = document.getElementById("selectSeccion").value;
    
    if (dia && curso && horaInicio && horaFin && seccion) {
        let nuevaLinea = { dia, curso, horaInicio, horaFin, seccion };
        agregarAsociacion(nuevaLinea, "HORARIO");  // Cambio aquí
    }
}

function agregarAsociacion(nuevaLinea, tipoAsociacion) {
    let asociaciones = JSON.parse(sessionStorage.getItem(tipoAsociacion) || "[]");

    // Verificar si la asociación ya existe
    let existe = asociaciones.some(asoc => {
        return asoc.curso === nuevaLinea.curso && asoc.seccion === nuevaLinea.seccion && asoc.dia === nuevaLinea.dia;
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
