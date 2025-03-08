let session = pl.create(1000);
let CodigoProlog = "";

window.onload = function () {
    validar_codigo_prolog();
    if (sessionStorage.getItem("CODIGO_PROLOG")) {
        cargarDatosDesdeSessionStorage();
    }
};

//   Función para validar y mostrar el código Prolog
function validar_codigo_prolog() {
    try {
        CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG");
        if (!CodigoProlog) {
            console.log("No hay código almacenado o está vacío.");
            return;
        }
        console.log("HAY CÓDIGO ALMACENADO:", CodigoProlog);
        document.getElementById("STATUS_PROLOG").style.backgroundColor = "green";
        procesarCodigoProlog(CodigoProlog);  //   Procesa los datos después de cargarlos
    } catch (error) {
        console.log("ERROR AL OBTENER CÓDIGO PROLOG", error);
    }
}

//   Función para cargar archivo Prolog
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        CodigoProlog = e.target.result;
        session = pl.create(1000);
        console.log(CodigoProlog)
        session.consult(CodigoProlog, {
            success: function () {
                console.log("ÉXITO AL CARGAR");
                document.getElementById("STATUS_PROLOG").style.backgroundColor = "green";
                sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
                console.log("CODIGO_PROLOG guardado en sessionStorage:", CodigoProlog);
                procesarCodigoProlog(CodigoProlog); //   Procesar datos después de cargarlos
            },
            error: function (err) {
                console.log("Error al cargar el código: " + err);
            }
        });
    };
    reader.readAsText(file);
});

//   Función para procesar Código Prolog y extraer datos
function procesarCodigoProlog(codigo) {
    let facultades = [], carreras = [], aptitudes = [], facultadCarrera = [], carreraAptitud = [], curso_unico_ = [], dias = [];
    let horas = [], habilidades_unicas = [], habilidades = [], intereses_unicos = [], intereses = [], preferencias = [], secciones_unicos = [];
    let lineas = codigo.split("\n");
    
    lineas.forEach(linea => {
        linea = linea.trim();
        // Facultad única
        if (linea.startsWith("facultad_unico(")) {
            let facultad = linea.match(/facultad_unico\((.*?)\)/);
            if (facultad) facultades.push(facultad[1].slice(1, -1));
        } 
        // Carrera
        else if (linea.startsWith("carrera(")) {
            let carrera = linea.match(/carrera\((.*?)\)/);
            if (carrera) carreras.push(carrera[1].slice(1, -1));
        } 
        // Aptitud única
        else if (linea.startsWith("aptitud_unico(")) {
            let aptitud = linea.match(/aptitud_unico\((.*?)\)/);
            if (aptitud) aptitudes.push(aptitud[1].slice(1, -1));
        } 
        // Curso único
        else if (linea.startsWith("curso_unico(")) {
            let curso_unico = linea.match(/curso_unico\((.*?)\)/);
            if (curso_unico) curso_unico_.push(curso_unico[1].slice(1, -1));
        } 
        // Día
        else if (linea.startsWith("dia(")) {
            let dia = linea.match(/dia\((.*?)\)/);
            if (dia) dias.push(dia[1].slice(1, -1));
        } 
        // Hora
        else if (linea.startsWith("hora(")) {
            let hora = linea.match(/hora\((.*?)\)/);
            if (hora) horas.push(hora[1].slice(1, -1));
        } 
        // Habilidad única
        else if (linea.startsWith("habilidad_unica(")) {
            let habilidad_unica = linea.match(/habilidad_unica\((.*?)\)/);
            if (habilidad_unica) habilidades_unicas.push(habilidad_unica[1].slice(1, -1));
        } 
        // Habilidad
        else if (linea.startsWith("habilidad(")) {
            let habilidad = linea.match(/habilidad\((.*?)\)/);
            if (habilidad) habilidades.push(habilidad[1].slice(1, -1));
        } 
        // Interés único
        else if (linea.startsWith("interes_unico(")) {
            let interes_unico = linea.match(/interes_unico\((.*?)\)/);
            if (interes_unico) intereses_unicos.push(interes_unico[1].slice(1, -1));
        } 
        // Relación carrera-interés
        else if (linea.startsWith("interes(")) {
            let relacionCarreraInteres = linea.match(/interes\((.*?),\s*(.*?)\)/);
            if (relacionCarreraInteres) intereses.push({ carrera: relacionCarreraInteres[1], interes: relacionCarreraInteres[2] });
        }
        // Preferencia
        else if (linea.startsWith("preferencia(")) {
            let preferencia = linea.match(/preferencia\((.*?)\)/);
            if (preferencia) preferencias.push(preferencia[1].slice(1, -1));
        } 
        // Sección única
        else if (linea.startsWith("seccion_unico(")) {
            let seccion_unico = linea.match(/seccion_unico\((.*?)\)/);
            if (seccion_unico) secciones_unicos.push(seccion_unico[1].slice(1, -1));
        } 
        // Relación facultad-carrera
        else if (linea.startsWith("facultad(")) {
            let relacionFacultadCarrera = linea.match(/facultad\((.*?),\s*(.*?)\)/);
            if (relacionFacultadCarrera) facultadCarrera.push({ facultad: relacionFacultadCarrera[1], carrera: relacionFacultadCarrera[2] });
        } 
        // Relación carrera-aptitud
        else if (linea.startsWith("aptitud(")) {
            let relacionCarreraAptitud = linea.match(/aptitud\((.*?),\s*(.*?)\)/);
            if (relacionCarreraAptitud) carreraAptitud.push({ carrera: relacionCarreraAptitud[1], aptitud: relacionCarreraAptitud[2] });
        }
    });

    // Guardar en sessionStorage
    sessionStorage.setItem("FACULTAD", JSON.stringify(facultades));
    sessionStorage.setItem("CARRERA", JSON.stringify(carreras));
    sessionStorage.setItem("APTITUD", JSON.stringify(aptitudes));
    sessionStorage.setItem("FACULTAD_CARRERA", JSON.stringify(facultadCarrera));
    sessionStorage.setItem("CARRERA_APTITUD", JSON.stringify(carreraAptitud));
    sessionStorage.setItem("CURSO_UNICO", JSON.stringify(curso_unico_));
    sessionStorage.setItem("DIA", JSON.stringify(dias));
    sessionStorage.setItem("HORA", JSON.stringify(horas));
    sessionStorage.setItem("HABILIDAD_UNICA", JSON.stringify(habilidades_unicas));
    sessionStorage.setItem("HABILIDAD", JSON.stringify(habilidades));
    sessionStorage.setItem("INTERES_UNICO", JSON.stringify(intereses_unicos));
    sessionStorage.setItem("INTERES", JSON.stringify(intereses));
    sessionStorage.setItem("PREFERENCIA", JSON.stringify(preferencias));
    sessionStorage.setItem("SECCION_UNICO", JSON.stringify(secciones_unicos));

    // Actualizar la UI
    actualizarListaDesdeArray("listaFacultades", facultades);
    actualizarListaDesdeArray("listaCarreras", carreras);
    actualizarListaDesdeArray("listaAptitudes", aptitudes);
    actualizarListaDesdeArray("listaCursos", curso_unico_);
    actualizarListaDesdeArray("listaDias", dias);
    actualizarListaDesdeArray("listaHoras", horas);
    actualizarListaDesdeArray("listaHabilidadesUnicas", habilidades_unicas);
    actualizarListaDesdeArray("listaHabilidades", habilidades);
    actualizarListaDesdeArray("listaInteresesUnicos", intereses_unicos);
    actualizarListaDesdeArray("listaIntereses", intereses);
    actualizarListaDesdeArray("listaPreferencias", preferencias);
    actualizarListaDesdeArray("listaSecciones", secciones_unicos);
}

//   Función para actualizar listas en la UI
function actualizarListaDesdeArray(idLista, elementos) {
    let lista = document.getElementById(idLista);
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos

    elementos.forEach(texto => {
        let item = document.createElement("li");
        item.textContent = texto;
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            lista.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar(idLista.replace('lista', '').toLowerCase(), texto);
        };
        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
}

function AccionSiguiente() {
    // Guardar las listas en sessionStorage
    sessionStorage.setItem("FACULTAD", JSON.stringify(obtenerLista("listaFacultades")));
    sessionStorage.setItem("CARRERA", JSON.stringify(obtenerLista("listaCarreras")));
    sessionStorage.setItem("APTITUD", JSON.stringify(obtenerLista("listaAptitudes")));
    // sessionStorage.setItem("HABILIDAD_UNICA", JSON.stringify(obtenerLista("listaHabilidades")));
    // sessionStorage.setItem("INTERES_UNICO", JSON.stringify(obtenerLista("listaIntereses")));
    // sessionStorage.setItem("HORA", JSON.stringify(obtenerLista("listaHoras")));
    // sessionStorage.setItem("DIA", JSON.stringify(obtenerLista("listaDias")));
    // sessionStorage.setItem("CURSO_UNICO", JSON.stringify(obtenerLista("listaCursos")));
    // sessionStorage.setItem("SECCION_UNICO", JSON.stringify(obtenerLista("listaSecciones")));
    // sessionStorage.setItem("PREFERENCIA", JSON.stringify(obtenerLista("listaPreferencias")));

    console.log("Datos guardados en sessionStorage");
}

// Función para obtener los elementos de las listas
function obtenerLista(idLista) {
    let listaElementos = [];
    let lista = document.getElementById(idLista);
    let items = lista.getElementsByTagName("li");
    for (let item of items) {
        listaElementos.push(item.textContent.replace("❌", "").trim());
    }
    return listaElementos;
}

// Función para agregar una Facultad desde la interfaz de usuario
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


// Función para agregar una Carrera desde la interfaz de usuario
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

function escapeRegExp(str) {
    return str.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&");  // Escapa caracteres especiales
}

// Función para eliminar un item de CODIGO_PROLOG después de la eliminación
function actualizarPrologDespuésDeEliminar(tipo, valor) {
    let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
    
    // Asegúrate de que el valor tiene comillas y esté en el formato correcto
    valor = valor.trim();  // Eliminar espacios adicionales
    
    // Escapar el valor antes de pasarlo a la expresión regular
    const valorEscapado = escapeRegExp(valor);
    
    // Crear la expresión regular para eliminar la línea de Prolog
    const regex = new RegExp(`${tipo}\\("${valorEscapado}"\\)\\.`);
    
    // Eliminar la línea del código Prolog
    CodigoProlog = CodigoProlog.replace(regex, "");
    
    // Guardar el nuevo Código Prolog actualizado
    sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    
    // También actualizar sessionStorage para las listas
    let lista = JSON.parse(sessionStorage.getItem(tipo.toUpperCase()) || "[]");
    lista = lista.filter(item => item !== valor); // Eliminar el valor de la lista
    sessionStorage.setItem(tipo.toUpperCase(), JSON.stringify(lista)); // Guardar de nuevo la lista actualizada
}

//   Función para actualizar las listas en la UI desde un array
function actualizarListaDesdeArray(idLista, elementos) {
    let lista = document.getElementById(idLista);
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos

    elementos.forEach(texto => {
        let item = document.createElement("li");
        item.textContent = texto;
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            lista.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar('facultad', texto);
            actualizarPrologDespuésDeEliminar('carrera', texto);
            actualizarPrologDespuésDeEliminar('aptitud', texto);

        };
        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
}


/*llllllllllllllllllll */

// Función para agregar habilidad única desde la UI
function agregarHabilidadUnicaDesdeUI() {
    const inputHabilidad = document.getElementById("inputHabilidad");
    const habilidad = inputHabilidad.value.trim();

    if (habilidad) {
        let listaHabilidades = document.getElementById("listaHabilidades");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = habilidad;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaHabilidades.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("habilidad", habilidad);
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
        alert("Por favor, ingresa un nombre de habilidad.");
    }
}

// Función para agregar interés único desde la UI
function agregarInteresUnicoDesdeUI() {
    const inputInteres = document.getElementById("inputInteres");
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
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("interes", interes);
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
        alert("Por favor, ingresa un interés.");
    }
}

// Función para agregar hora desde la UI
function agregarHoraDesdeUI() {
    const inputHora = document.getElementById("inputHora");
    const hora = inputHora.value.trim();

    if (hora) {
        let listaHoras = document.getElementById("listaHoras");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = hora;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaHoras.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("hora", hora);
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
        alert("Por favor, ingresa una hora.");
    }
}

// Función para agregar día desde la UI
function agregarDiaDesdeUI() {
    const inputDia = document.getElementById("inputDia");
    const dia = inputDia.value.trim();

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
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("dia", dia);
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

// Función para agregar curso único desde la UI
function agregarCursoUnicoDesdeUI() {
    const inputCurso = document.getElementById("inputCurso");
    const curso = inputCurso.value.trim();

    if (curso) {
        let listaCursos = document.getElementById("listaCursos");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = curso;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaCursos.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("curso", curso);
        };

        item.appendChild(btnEliminar);
        listaCursos.appendChild(item);

        // Limpiar el campo de entrada
        inputCurso.value = "";

        // Guardar en sessionStorage
        let cursos = JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]");
        cursos.push(curso);
        sessionStorage.setItem("CURSO_UNICO", JSON.stringify(cursos));

        // Actualizar CODIGO_PROLOG
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\ncurso("${curso}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa un curso.");
    }
}

// Función para agregar sección única desde la UI
function agregarSeccionUnicoDesdeUI() {
    const inputSeccion = document.getElementById("inputSeccion");
    const seccion = inputSeccion.value.trim();

    if (seccion) {
        let listaSecciones = document.getElementById("listaSecciones");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = seccion;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaSecciones.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("seccion", seccion);
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
        CodigoProlog += `\nseccion("${seccion}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa una sección.");
    }
}

// Función para agregar preferencia desde la UI
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