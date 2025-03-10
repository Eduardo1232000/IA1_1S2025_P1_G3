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
    actualizarLista("CURSO_UNICO", [...cursos]);
    actualizarLista("DIA", [...dias]);
    actualizarLista("PREFERENCIA_UNICA", [...preferencias]);
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
    const dia = inputDia.value.trim();

    if (dia) {
        let listaDias = document.getElementById("DIA");

        // Obtener los días actuales desde sessionStorage
        let dias = JSON.parse(sessionStorage.getItem("DIA") || "[]");

        // Verificar si el día ya existe
        if (dias.includes(dia)) {
            alert("Este día ya ha sido agregado.");
            return;
        }

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

function agregarCursoUnicoDesdeUI() {
    const inputCurso = document.getElementById("inputCurso");
    const curso = inputCurso.value.trim();

    if (curso) {
        let listaCursos = document.getElementById("CURSO_UNICO");

        // Obtener los cursos actuales desde sessionStorage
        let cursos = JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]");

        // Verificar si el curso ya existe
        if (cursos.includes(curso)) {
            alert("Este curso ya ha sido agregado.");
            return;
        }

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = curso;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaCursos.removeChild(item);
            eliminarElementoDeSessionStorage(curso, "CURSO_UNICO");
        };

        item.appendChild(btnEliminar);
        listaCursos.appendChild(item);

        // Limpiar el campo de entrada
        inputCurso.value = "";

        // Guardar en sessionStorage
        cursos.push(curso);
        sessionStorage.setItem("CURSO_UNICO", JSON.stringify(cursos));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\ncurso("${curso}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa el nombre del curso.");
    }
}

function agregarPreferenciaDesdeUI() {
    const inputPreferencia = document.getElementById("inputPreferencia");
    const preferencia = inputPreferencia.value.trim();

    if (preferencia) {
        let listaPreferencias = document.getElementById("PREFERENCIA_UNICA");

        // Obtener las preferencias actuales desde sessionStorage
        let preferencias = JSON.parse(sessionStorage.getItem("PREFERENCIA_UNICA") || "[]");

        // Verificar si la preferencia ya existe
        if (preferencias.includes(preferencia)) {
            alert("Esta preferencia ya ha sido agregada.");
            return;
        }

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
        preferencias.push(preferencia);
        sessionStorage.setItem("PREFERENCIA_UNICA", JSON.stringify(preferencias));

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

