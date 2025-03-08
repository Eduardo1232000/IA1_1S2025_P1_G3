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
            return;
        }
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
        session.consult(CodigoProlog, {
            success: function () {
                document.getElementById("STATUS_PROLOG").style.backgroundColor = "green";
                sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
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
    let facultades = [], carreras = [], aptitudes = [], facultadCarrera = [], carreraAptitud = [], curso_unico_ = [];
    let dias = [], horas = [], habilidades_unicas = [], habilidades = [], intereses_unicos = [], intereses = [];
    let preferencias = [], secciones_unicos = [], seccion = [], horarios = [];
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
        // Relación carrera-habilidad
        else if (linea.startsWith("habilidad(")) {
            let relacionCarreraHabilidad = linea.match(/habilidad\((.*?),\s*(.*?)\)/);
            if (relacionCarreraHabilidad) habilidades.push({ habilidad: relacionCarreraHabilidad[1], carrera: relacionCarreraHabilidad[2] });
        }
        // Interés único
        else if (linea.startsWith("interes_unico(")) {
            let interes_unico = linea.match(/interes_unico\((.*?)\)/);
            if (interes_unico) intereses_unicos.push(interes_unico[1].slice(1, -1));
        }
        // Relación carrera-interés
        else if (linea.startsWith("interes(")) {
            let relacionCarreraInteres = linea.match(/interes\((.*?),\s*(.*?)\)/);
            if (relacionCarreraInteres) intereses.push({ interes: relacionCarreraInteres[1], carrera: relacionCarreraInteres[2] });
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
        // Relación carrera-sección
        else if (linea.startsWith("seccion(")) {
            let relacionCarreraSeccion = linea.match(/seccion\((.*?),\s*(.*?)\)/);
            if (relacionCarreraSeccion) seccion.push({ seccion: relacionCarreraSeccion[1], carrera: relacionCarreraSeccion[2] });
        }
        // Relación facultad-carrera
        else if (linea.startsWith("facultad(")) {
            let relacionFacultadCarrera = linea.match(/facultad\((.*?),\s*(.*?)\)/);
            if (relacionFacultadCarrera) facultadCarrera.push({ facultad: relacionFacultadCarrera[1], carrera: relacionFacultadCarrera[2] });
        }
        // Relación carrera-aptitud
        else if (linea.startsWith("aptitud(")) {
            let relacionCarreraAptitud = linea.match(/aptitud\((.*?),\s*(.*?)\)/);
            if (relacionCarreraAptitud) carreraAptitud.push({ aptitud: relacionCarreraAptitud[1], carrera: relacionCarreraAptitud[2] });
        }
        // Relación de horario
        else if (linea.startsWith("horario(")) {
            let relacionHorarios = linea.match(/horario\((.*?),\s*(.*?),\s*(.*?),\s*(.*?),\s*(.*?)\)/);
            if (relacionHorarios) {
                let dia = relacionHorarios[1].replace(/'/g, '').trim();
                let hora_inicio = relacionHorarios[2].replace(/'/g, '').trim();
                let hora_fin = relacionHorarios[3].replace(/'/g, '').trim();
                let seccion = relacionHorarios[4].replace(/'/g, '').trim();
                let curso = relacionHorarios[5].replace(/'/g, '').trim();
                horarios.push({ dia, hora_inicio, hora_fin, seccion, curso });
            }
        }
    });

    // Recuperar los valores actuales de sessionStorage y agregarlos a las listas existentes
    let facultadesExistentes = JSON.parse(sessionStorage.getItem("FACULTAD") || "[]");
    let carrerasExistentes = JSON.parse(sessionStorage.getItem("CARRERA") || "[]");
    let aptitudesExistentes = JSON.parse(sessionStorage.getItem("APTITUD") || "[]");
    let facultadCarreraExistente = JSON.parse(sessionStorage.getItem("FACULTAD_CARRERA") || "[]");
    let carreraAptitudExistente = JSON.parse(sessionStorage.getItem("CARRERA_APTITUD") || "[]");
    let cursoUnicoExistente = JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]");
    let diasExistentes = JSON.parse(sessionStorage.getItem("DIA") || "[]");
    let horasExistentes = JSON.parse(sessionStorage.getItem("HORA") || "[]");
    let habilidadesUnicasExistentes = JSON.parse(sessionStorage.getItem("HABILIDAD_UNICA") || "[]");
    let habilidadesExistentes = JSON.parse(sessionStorage.getItem("HABILIDAD") || "[]");
    let interesesUnicosExistentes = JSON.parse(sessionStorage.getItem("INTERES_UNICO") || "[]");
    let interesesExistentes = JSON.parse(sessionStorage.getItem("INTERES") || "[]");
    let preferenciasExistentes = JSON.parse(sessionStorage.getItem("PREFERENCIA") || "[]");
    let seccionesUnicasExistentes = JSON.parse(sessionStorage.getItem("SECCION_UNICO") || "[]");
    let seccionExistente = JSON.parse(sessionStorage.getItem("SECCION") || "[]");
    let horariosExistentes = JSON.parse(sessionStorage.getItem("HORARIO") || "[]");

    // Solo agregar si no existen datos para evitar duplicados
    facultades = [...new Set([...facultadesExistentes, ...facultades])];
    carreras = [...new Set([...carrerasExistentes, ...carreras])];
    aptitudes = [...new Set([...aptitudesExistentes, ...aptitudes])];
    facultadCarrera = [...new Set([...facultadCarreraExistente, ...facultadCarrera])];
    carreraAptitud = [...new Set([...carreraAptitudExistente, ...carreraAptitud])];
    curso_unico_ = [...new Set([...cursoUnicoExistente, ...curso_unico_])];
    dias = [...new Set([...diasExistentes, ...dias])];
    horas = [...new Set([...horasExistentes, ...horas])];
    habilidades_unicas = [...new Set([...habilidadesUnicasExistentes, ...habilidades_unicas])];
    habilidades = [...new Set([...habilidadesExistentes, ...habilidades])];
    intereses_unicos = [...new Set([...interesesUnicosExistentes, ...intereses_unicos])];
    intereses = [...new Set([...interesesExistentes, ...intereses])];
    preferencias = [...new Set([...preferenciasExistentes, ...preferencias])];
    secciones_unicos = [...new Set([...seccionesUnicasExistentes, ...secciones_unicos])];
    seccion = [...new Set([...seccionExistente, ...seccion])];
    horarios = [...new Set([...horariosExistentes, ...horarios])];

    // Guardar todos los datos actualizados en sessionStorage
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
    sessionStorage.setItem("SECCION", JSON.stringify(seccion));
    sessionStorage.setItem("HORARIO", JSON.stringify(horarios));

    // Actualizar la interfaz con los datos
    actualizarListaDesdeArray("listaFacultades", facultades);
    actualizarListaDesdeArray("listaCarreras", carreras);
    actualizarListaDesdeArray("listaAptitudes", aptitudes);
    actualizarListaDesdeArray("listaCursos", curso_unico_);
    actualizarListaDesdeArray("listaDias", dias);
    actualizarListaDesdeArray("listaHoras", horas);
    actualizarListaDesdeArray("listaHabilidades", habilidades);
    actualizarListaDesdeArray("listaIntereses", intereses);
    actualizarListaDesdeArray("listaPreferencias", preferencias);
    actualizarListaDesdeArray("listaSecciones", secciones_unicos);
    actualizarListaDesdeArray("listaHorarios", horarios);
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
    sessionStorage.setItem("FACULTAD", JSON.stringify(obtenerLista("listaFacultades")));
    sessionStorage.setItem("CARRERA", JSON.stringify(obtenerLista("listaCarreras")));
    sessionStorage.setItem("APTITUD", JSON.stringify(obtenerLista("listaAptitudes")));
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
// Función para asociar el horario desde la UI
function asociarHorarioDesdeUI() {
    const selectCurso = document.getElementById("selectCurso");
    const selectHoraI = document.getElementById("selectHoraI");
    const selectHoraF = document.getElementById("selectHoraF");
    const selectSeccion = document.getElementById("selectSeccion");

    const curso = selectCurso.value.trim();
    const hora_inicio = selectHoraI.value.trim();
    const hora_fin = selectHoraF.value.trim();
    const seccion = selectSeccion.value.trim();

    if (curso && hora_inicio && hora_fin && seccion) {
        let listaHorarios = document.getElementById("listaHorarios");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = `${curso} - ${hora_inicio} a ${hora_fin} - Sección: ${seccion}`;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaHorarios.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar("horario", `${curso}, ${hora_inicio}, ${hora_fin}, ${seccion}`);
        };

        item.appendChild(btnEliminar);
        listaHorarios.appendChild(item);

        // Limpiar los campos de selección
        selectCurso.value = "";
        selectHoraI.value = "";
        selectHoraF.value = "";
        selectSeccion.value = "";

        // Guardar en sessionStorage
        let horarios = JSON.parse(sessionStorage.getItem("HORARIO") || "[]");
        horarios.push({ curso, hora_inicio: hora_inicio, hora_fin: hora_fin, seccion });
        sessionStorage.setItem("HORARIO", JSON.stringify(horarios));

        // Actualizar el código Prolog
        let CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG") || "";
        CodigoProlog += `\nhorario("${curso}", "${hora_inicio}", "${hora_fin}", "${seccion}").`;
        sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
    } else {
        alert("Por favor, ingresa todos los datos para asociar un horario.");
    }
}
