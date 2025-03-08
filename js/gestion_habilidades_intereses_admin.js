window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    console.log("CODIGO_PROLOG:", CodigoProlog); // Verifica el contenido de CODIGO_PROLOG
    
    // Cargar las listas desde sessionStorage
    let habilidades = new Set(JSON.parse(sessionStorage.getItem("HABILIDAD_UNICA") || "[]"));
    let intereses = new Set(JSON.parse(sessionStorage.getItem("INTERES_UNICO") || "[]"));

    // Poblar las listas
    actualizarLista("listaHabilidadesUnicas", [...habilidades]);
    actualizarLista("listaIntereses", [...intereses]);
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

function agregarHabilidadDesdeUI() {
    const inputHabilidad = document.getElementById("inputHabilidad");
    const habilidad = inputHabilidad.value.trim();

    if (habilidad) {
        let listaHabilidades = document.getElementById("listaHabilidadesUnicas");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = habilidad;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaHabilidades.removeChild(item);
            eliminarElementoDeSessionStorage(habilidad, "HABILIDAD_UNICA");
        };

        item.appendChild(btnEliminar);
        listaHabilidades.appendChild(item);

        // Limpiar el campo de entrada
        inputHabilidad.value = "";

        // Guardar en sessionStorage
        let habilidades = JSON.parse(sessionStorage.getItem("HABILIDAD_UNICA") || "[]");
        habilidades.push(habilidad);
        sessionStorage.setItem("HABILIDAD_UNICA", JSON.stringify(habilidades));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\nhabilidad("${habilidad}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa el nombre de la habilidad.");
    }
}

function agregarInteresDesdeUI() {
    const inputInteres = document.getElementById("inputCarrera");
    const interes = inputInteres.value.trim();

    if (interes) {
        let listaIntereses = document.getElementById("listaCarreras");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = interes;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaIntereses.removeChild(item);
            eliminarElementoDeSessionStorage(interes, "INTERES_UNICO");
        };

        item.appendChild(btnEliminar);
        listaIntereses.appendChild(item);

        // Limpiar el campo de entrada
        inputInteres.value = "";

        // Guardar en sessionStorage
        let intereses = JSON.parse(sessionStorage.getItem("INTERES_UNICO") || "[]");
        intereses.push(interes);
        sessionStorage.setItem("INTERES_UNICO", JSON.stringify(intereses));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\ninteres("${interes}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa el nombre del interés.");
    }
}

function AccionSiguiente() {
    console.log("Datos guardados en sessionStorage");
}
