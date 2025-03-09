window.onload = function () {
    cargarDatosDesdeSessionStorage();
};

function cargarDatosDesdeSessionStorage() {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    console.log("CODIGO_PROLOG:", CodigoProlog); // Verifica el contenido de CODIGO_PROLOG
    
    // Cargar las listas desde sessionStorage
    let cursos = new Set(JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]"));
    let dias = new Set(JSON.parse(sessionStorage.getItem("DIA") || "[]"));
    let preferencias = new Set(JSON.parse(sessionStorage.getItem("PREFERENCIA_UNICA") || "[]"));

    // Poblar las listas
    actualizarLista("listaCursosUnicos", [...cursos]);
    actualizarLista("listaDias", [...dias]);
    actualizarLista("listaPreferencias", [...preferencias]);
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

function agregarDiaDesdeUI() {
    const inputDia = document.getElementById("inputDia");
    const dia = inputDia.value.trim(); // Corregido: `dias` a `dia`

    if (dia) {
        let listaDias = document.getElementById("listaDias");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = dia;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaDias.removeChild(item);
            eliminarElementoDeSessionStorage(dia, "DIA");
        };

        item.appendChild(btnEliminar);
        listaDias.appendChild(item);

        // Limpiar el campo de entrada
        inputDia.value = "";

        // Guardar en sessionStorage
        let dias = JSON.parse(sessionStorage.getItem("DIA") || "[]");
        dias.push(dia);
        sessionStorage.setItem("DIA", JSON.stringify(dias));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\ndia("${dia}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa un día.");
    }
}


function agregarInteresDesdeUI() {
    const inputInteres = document.getElementById("inputCarrera");
    const interes = inputInteres.value.trim();

    if (interes) {
        let listaIntereses = document.getElementById("listaIntereses");

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

function agregarCursoUnicoDesdeUI() {
    const inputCurso = document.getElementById("inputCurso");
    const habilidad = inputCurso.value.trim();

    if (habilidad) {
        let listacursos = document.getElementById("listaCursosUnicos");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = habilidad;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listacursos.removeChild(item);
            eliminarElementoDeSessionStorage(habilidad, "CURSO_UNICO");
        };

        item.appendChild(btnEliminar);
        listacursos.appendChild(item);

        // Limpiar el campo de entrada
        inputCurso.value = "";

        // Guardar en sessionStorage
        let habilidades = JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]");
        habilidades.push(habilidad);
        sessionStorage.setItem("CURSO_UNICO", JSON.stringify(habilidades));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\ncurso("${habilidad}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa el nombre de la habilidad.");
    }
}

function agregarPreferenciaDesdeUI() {
    const inputPreferencia = document.getElementById("inputPreferencia");
    const preferencia = inputPreferencia.value.trim();
    if (preferencia) {
        let listaPreferencias = document.getElementById("listaPreferencias");
        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = preferencia;
        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaPreferencias.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("preferencia", preferencia);
        };
        item.appendChild(btnEliminar);
        listaPreferencias.appendChild(item);
        // Limpiar el campo de entrada
        inputPreferencia.value = "";
        // Guardar en sessionStorage
        let preferencias = JSON.parse(sessionStorage.getItem("PREFERENCIA") || "[]");
        preferencias.push(preferencia);
        sessionStorage.setItem("PREFERENCIA", JSON.stringify(preferencias));
        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\npreferencia("${preferencia}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa una preferencia.");
    }
}

function AccionSiguiente() {
    console.log("Datos guardados en sessionStorage");
}

