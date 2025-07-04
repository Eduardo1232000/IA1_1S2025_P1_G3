window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let dias = new Set(JSON.parse(sessionStorage.getItem("DIA") || "[]"));
    let carreras = new Set(JSON.parse(sessionStorage.getItem("CARRERA") || "[]"));
    let cursos = new Set(JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]"));
    let horasInicio = new Set(JSON.parse(sessionStorage.getItem("HORA") || "[]"));
    let horasFin = new Set(JSON.parse(sessionStorage.getItem("HORA") || "[]"));
    let secciones = new Set(JSON.parse(sessionStorage.getItem("SECCION_UNICO") || "[]"));
    let asociacionesCursosHorarios = JSON.parse(sessionStorage.getItem("HORARIO") || "[]"); // Cambio aquí
    let asociacionesCarrerasCursos = JSON.parse(sessionStorage.getItem("CURSO") || "[]"); // Cambio aquí
    console.log(asociacionesCarrerasCursos)
    // Poblar los select
    poblarSelect("selectDia", [...dias]);
    poblarSelect("selectCurso", [...cursos]);
    poblarSelect("selectCur", [...cursos]);
    poblarSelect("selectCar", [...carreras]);
    poblarSelect("selectHoraI", [...horasInicio]);
    poblarSelect("selectHoraF", [...horasFin]);
    poblarSelect("selectSeccion", [...secciones]);

    // Actualizar la lista de asociaciones
    actualizarLista("HORARIO", asociacionesCursosHorarios, "curso", "seccion");
    actualizarLista2("CURSO", asociacionesCarrerasCursos, "curso", "carrera");
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
        item.textContent = `${asoc.dia} , ${asoc.hora_inicio}, ${asoc.hora_fin} , ${asoc.seccion} , ${asoc.curso}`;
        lista.appendChild(item);
    });
}

function actualizarLista2(idLista, asociaciones, clave1, clave2) {
    let lista = document.getElementById(idLista);
    if (!lista) return;
    lista.innerHTML = "";
    asociaciones.forEach(asoc => {
        let item = document.createElement("li");
        console.log(`${asoc[clave1]}`)
        item.textContent = `${asoc[clave1]} - ${asoc[clave2]}`;
        lista.appendChild(item);
    });
}

function asociarFacultadCarreraDesdeUI() {
    let dia = document.getElementById("selectDia").value;
    let curso = document.getElementById("selectCurso").value;
    let hora_inicio = document.getElementById("selectHoraI").value;
    let hora_fin = document.getElementById("selectHoraF").value;
    let seccion = document.getElementById("selectSeccion").value;
    if (dia && curso && hora_inicio && hora_fin && seccion) {
        let nuevaLinea = { dia, curso, hora_inicio, hora_fin, seccion };
        agregarAsociacion(nuevaLinea, "HORARIO");
    } else {
        console.log("Faltan datos para hacer la asociación.");
    }
}
function asociarCarreraCursoDesdeUI() {
    let carrera = document.getElementById("selectCar").value;
    let curso = document.getElementById("selectCur").value;
    if (carrera && curso) {
        let nuevaLinea = { carrera, curso };
        console.log(curso)
        agregarAsociacion(nuevaLinea, "CURSO");
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
