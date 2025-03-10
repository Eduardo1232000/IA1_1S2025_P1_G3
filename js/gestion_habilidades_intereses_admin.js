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
    actualizarLista("HABILIDAD_UNICA", [...habilidades]);
    actualizarLista("INTERES_UNICO", [...intereses]);
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
        // Obtener la lista actual de habilidades desde sessionStorage
        let habilidades = JSON.parse(sessionStorage.getItem("HABILIDAD_UNICA") || "[]");

        // Verificar si la habilidad ya existe
        if (habilidades.includes(habilidad)) {
            alert("La habilidad ya ha sido agregada.");
            return;
        }

        let listaHabilidades = document.getElementById("HABILIDAD_UNICA");

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
    const inputInteres = document.getElementById("inputInteres"); // Corregido el ID del input
    const interes = inputInteres.value.trim();

    if (interes) {
        let listaIntereses = document.getElementById("INTERES_UNICO");

        // Obtener la lista actual de intereses desde sessionStorage
        let intereses = JSON.parse(sessionStorage.getItem("INTERES_UNICO") || "[]");

        // Verificar si el interés ya existe
        if (intereses.includes(interes)) {
            alert("Este interés ya ha sido agregado.");
            return;
        }

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
