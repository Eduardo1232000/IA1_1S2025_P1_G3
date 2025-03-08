window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    console.log("CODIGO_PROLOG:", CodigoProlog); // Verifica el contenido de CODIGO_PROLOG
    
    // Cargar las listas desde sessionStorage
    let secciones = new Set(JSON.parse(sessionStorage.getItem("SECCION_UNICO") || "[]"));
    let horas = new Set(JSON.parse(sessionStorage.getItem("HORA") || "[]"));

    // Poblar las listas
    actualizarLista("listaSeccion", [...secciones]);
    actualizarLista("listaHora", [...horas]);
}

function actualizarLista(idLista, elementos) {
    let lista = document.getElementById(idLista);
    if (!lista) return;
    lista.innerHTML = "";
    elementos.forEach(el => {
        let item = document.createElement("li");
        item.textContent = el;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            lista.removeChild(item);
            eliminarElementoDeSessionStorage(el, idLista);
        };

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
}

function eliminarElementoDeSessionStorage(elemento, listaId) {
    let lista = JSON.parse(sessionStorage.getItem(listaId) || "[]");
    lista = lista.filter(item => item !== elemento);
    sessionStorage.setItem(listaId, JSON.stringify(lista));
}

function agregarSeccionDesdeUI() {
    const inputSeccion = document.getElementById("inputFacultad");
    const seccion = inputSeccion.value.trim();

    if (seccion) {
        let listaSecciones = document.getElementById("listaSeccion");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = seccion;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaSecciones.removeChild(item);
            eliminarElementoDeSessionStorage(seccion, "SECCION_UNICO");
        };

        item.appendChild(btnEliminar);
        listaSecciones.appendChild(item);

        // Limpiar el campo de entrada
        inputSeccion.value = "";

        // Guardar en sessionStorage
        let secciones = JSON.parse(sessionStorage.getItem("SECCION_UNICO") || "[]");
        secciones.push(seccion);
        sessionStorage.setItem("SECCION_UNICO", JSON.stringify(secciones));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\nseccion_unico("${seccion}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa el nombre de la sección.");
    }
}

function agregarHoraDesdeUI() {
    const inputHora = document.getElementById("inputCarrera");
    const hora = inputHora.value.trim();

    if (hora) {
        let listaHoras = document.getElementById("listaHora");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = hora;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaHoras.removeChild(item);
            eliminarElementoDeSessionStorage(hora, "HORA");
        };

        item.appendChild(btnEliminar);
        listaHoras.appendChild(item);

        // Limpiar el campo de entrada
        inputHora.value = "";

        // Guardar en sessionStorage
        let horas = JSON.parse(sessionStorage.getItem("HORA") || "[]");
        horas.push(hora);
        sessionStorage.setItem("HORA", JSON.stringify(horas));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\nhora("${hora}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa la hora.");
    }
}

function AccionSiguiente() {
    console.log("Datos guardados en sessionStorage");
}
