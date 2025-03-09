function agregarFacultadDesdeUI() {
    const inputFacultad = document.getElementById("inputFacultad");
    const facultad = inputFacultad.value.trim();

    if (facultad) {
        // Verificar si ya existe
        let facultades = JSON.parse(sessionStorage.getItem("FACULTAD") || "[]");
        if (!facultades.includes(facultad)) {
            let listaFacultades = document.getElementById("listaFacultades");

            // Crear un nuevo elemento de lista
            let item = document.createElement("li");
            item.textContent = facultad;

            // Crear botón de eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "❌";
            btnEliminar.onclick = function () {
                listaFacultades.removeChild(item);
                // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
                actualizarPrologDespuésDeEliminar("facultad", facultad);
            };

            item.appendChild(btnEliminar);
            listaFacultades.appendChild(item);

            // Limpiar el campo de entrada
            inputFacultad.value = "";

            // Guardar en sessionStorage
            facultades.push(facultad);
            sessionStorage.setItem("FACULTAD", JSON.stringify(facultades));

            // Actualizar CODIGO_PROLOG
            let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
            CodigoProlog += `\nfacultad("${facultad}").`;
            sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
        } else {
            alert("La facultad ya existe.");
        }
    } else {
        alert("Por favor, ingresa un nombre de facultad.");
    }
}

function agregarCarreraDesdeUI() {
    const inputCarrera = document.getElementById("inputCarrera");
    const carrera = inputCarrera.value.trim();

    if (carrera) {
        let listaCarreras = document.getElementById("listaCarreras");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = carrera;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaCarreras.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("carrera", carrera);
        };

        item.appendChild(btnEliminar);
        listaCarreras.appendChild(item);

        // Limpiar el campo de entrada
        inputCarrera.value = "";

        // Guardar en sessionStorage
        let carreras = JSON.parse(sessionStorage.getItem("CARRERA") || "[]");
        carreras.push(carrera);
        sessionStorage.setItem("CARRERA", JSON.stringify(carreras));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\ncarrera("${carrera}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa un nombre de carrera.");
    }
}

function agregarAptitudDesdeUI() {
    const inputAptitud = document.getElementById("inputAptitud");
    const aptitud = inputAptitud.value.trim();

    if (aptitud) {
        let listaAptitudes = document.getElementById("listaAptitudes");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = aptitud;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaAptitudes.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("aptitud", aptitud);
        };

        item.appendChild(btnEliminar);
        listaAptitudes.appendChild(item);

        // Limpiar el campo de entrada
        inputAptitud.value = "";

        // Guardar en sessionStorage
        let aptitudes = JSON.parse(sessionStorage.getItem("APTITUD") || "[]");
        aptitudes.push(aptitud);
        sessionStorage.setItem("APTITUD", JSON.stringify(aptitudes));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\naptitud("${aptitud}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa un nombre de aptitud.");
    }
}