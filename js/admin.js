
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
        procesarCodigoProlog(CodigoProlog);  // Procesa los datos después de cargarlos
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
                //console.log("comienza todo");
                //console.log(CodigoProlog);
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
    let preferencias = [], secciones_unicos = [], seccion = [], horarios = [], preferencias_unicas=[];
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
        // Preferencia_unica
        else if (linea.startsWith("preferencia_unica(")) {
            let preferencia_unica = linea.match(/preferencia_unica\((.*?)\)/);
            if (preferencia_unica) preferencias_unicas.push(preferencia_unica[1].slice(1, -1));
        }
        // Preferencia
        else if (linea.startsWith("preferencia(")) {
            let relacionPreferenciaCarrera = linea.match(/preferencia\((.*?),\s*(.*?)\)/);
            if (relacionPreferenciaCarrera) preferencias.push({ preferencia: relacionPreferenciaCarrera[1], carrera: relacionPreferenciaCarrera[2] });
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
// Recuperar los valores actuales de sessionStorage
    let facultadesExistentes = new Set(JSON.parse(sessionStorage.getItem("FACULTAD") || "[]"));
    let carrerasExistentes = new Set(JSON.parse(sessionStorage.getItem("CARRERA") || "[]"));
    let aptitudesExistentes = new Set(JSON.parse(sessionStorage.getItem("APTITUD") || "[]"));
    let facultadCarreraExistente = new Set(JSON.parse(sessionStorage.getItem("FACULTAD_CARRERA") || "[]"));
    let carreraAptitudExistente = new Set(JSON.parse(sessionStorage.getItem("CARRERA_APTITUD") || "[]"));
    let cursoUnicoExistente = new Set(JSON.parse(sessionStorage.getItem("CURSO_UNICO") || "[]"));
    let diasExistentes = new Set(JSON.parse(sessionStorage.getItem("DIA") || "[]"));
    let horasExistentes = new Set(JSON.parse(sessionStorage.getItem("HORA") || "[]"));
    let habilidadesUnicasExistentes = new Set(JSON.parse(sessionStorage.getItem("HABILIDAD_UNICA") || "[]"));
    let habilidadesExistentes = new Set(JSON.parse(sessionStorage.getItem("HABILIDAD") || "[]"));
    let interesesUnicosExistentes = new Set(JSON.parse(sessionStorage.getItem("INTERES_UNICO") || "[]"));
    let interesesExistentes = new Set(JSON.parse(sessionStorage.getItem("INTERES") || "[]"));
    let preferenciasUnicasExistentes = new Set(JSON.parse(sessionStorage.getItem("PREFERENCIA_UNICA") || "[]"));
    let preferenciasExistentes = new Set(JSON.parse(sessionStorage.getItem("PREFERENCIA") || "[]"));
    let seccionesUnicasExistentes = new Set(JSON.parse(sessionStorage.getItem("SECCION_UNICO") || "[]"));
    let seccionExistente = new Set(JSON.parse(sessionStorage.getItem("SECCION") || "[]"));
    let horariosExistentes = new Set(JSON.parse(sessionStorage.getItem("HORARIO") || "[]"));

    // Solo agregar si no existen datos para evitar duplicados
    facultades = new Set([...facultadesExistentes, ...facultades]);
    carreras = new Set([...carrerasExistentes, ...carreras]);
    aptitudes = new Set([...aptitudesExistentes, ...aptitudes]);
    facultadCarrera = new Set([...facultadCarreraExistente, ...facultadCarrera]);
    carreraAptitud = new Set([...carreraAptitudExistente, ...carreraAptitud]);
    curso_unico_ = new Set([...cursoUnicoExistente, ...curso_unico_]);
    dias = new Set([...diasExistentes, ...dias]);
    horas = new Set([...horasExistentes, ...horas]);
    habilidades_unicas = new Set([...habilidadesUnicasExistentes, ...habilidades_unicas]);
    habilidades = new Set([...habilidadesExistentes, ...habilidades]);
    intereses_unicos = new Set([...interesesUnicosExistentes, ...intereses_unicos]);
    intereses = new Set([...interesesExistentes, ...intereses]);
    preferencias_unicas = new Set([...preferenciasUnicasExistentes, ...preferencias_unicas]);
    preferencias = new Set([...preferenciasExistentes, ...preferencias]);
    secciones_unicos = new Set([...seccionesUnicasExistentes, ...secciones_unicos]);
    seccion = new Set([...seccionExistente, ...seccion]);
    horarios = new Set([...horariosExistentes, ...horarios]);

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
    sessionStorage.setItem("PREFERENCIA_UNICA", JSON.stringify(preferencias_unicas));
    sessionStorage.setItem("PREFERENCIA", JSON.stringify(preferencias));
    sessionStorage.setItem("SECCION_UNICO", JSON.stringify(secciones_unicos));
    sessionStorage.setItem("SECCION", JSON.stringify(seccion));
    sessionStorage.setItem("HORARIO", JSON.stringify(horarios));

    // Poblar las listas
    actualizarListaDesdeArray("FACULTAD", [...facultades]);
    actualizarListaDesdeArray("CARRERA", [...carreras]);
    actualizarListaDesdeArray("APTITUD", [...aptitudes]);
}

function agregarElementoEnLista(tipo, valor) {
    let lista = JSON.parse(sessionStorage.getItem(tipo.toUpperCase()) || "[]");

    // Verificar si el valor ya está en la lista
    if (!lista.includes(valor)) {
        lista.push(valor); // Si no está, agregar el valor
        sessionStorage.setItem(tipo.toUpperCase(), JSON.stringify(lista));
    }
}
//   Función para actualizar listas en la UI
function actualizarListaDesdeArray(idLista, elementos) {
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
            actualizarPrologDespuésDeEliminar(el, idLista);
        };

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
}

function AccionSiguiente() {
    // sessionStorage.setItem("FACULTAD", JSON.stringify(obtenerLista("listaFacultades")));
    // sessionStorage.setItem("CARRERA", JSON.stringify(obtenerLista("listaCarreras")));
    // sessionStorage.setItem("APTITUD", JSON.stringify(obtenerLista("listaAptitudes")));
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

function escapeRegExp(str) {
    return str.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&");  // Escapa caracteres especiales
}

// Función para eliminar un item de CODIGO_PROLOG después de la eliminación
// Función para eliminar un item de CODIGO_PROLOG después de la eliminación
function actualizarPrologDespuésDeEliminar(elemento, listaId) {
    let lista = JSON.parse(sessionStorage.getItem(listaId) || "[]");
    lista = lista.filter(item => item !== elemento);
    sessionStorage.setItem(listaId, JSON.stringify(lista));
}


document.getElementById('downloadButton').addEventListener('click', function() {
    // Obtener los datos de la lista 'CODIGO_PROLOG' desde sessionStorage
    let codigoProlog = sessionStorage.getItem('CODIGO_PROLOG');
    // Verificar si hay datos cargados en sessionStorage
    if (!codigoProlog) {
        alert("No hay datos Prolog disponibles para descargar.");
        return; // Si no hay datos, no hacer nada
    }
    // Crear un Blob con el contenido Prolog
    let blob = new Blob([codigoProlog], { type: 'text/plain' });
    // Crear un enlace de descarga
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'codigo_prolog_G3.pl'; // Nombre del archivo de descarga
    // Simular el clic en el enlace para iniciar la descarga
    link.click();
});

function agregarFacultadDesdeUI() {
    const inputFacultad = document.getElementById("inputFacultad");
    const facultad = inputFacultad.value.trim();

    if (facultad) {
        // Verificar si ya existe
        let facultades = JSON.parse(sessionStorage.getItem("FACULTAD"));
        if (!facultades.includes(facultad)) {
            let listaFacultades = document.getElementById("FACULTAD");

            // Crear un nuevo elemento de lista
            let item = document.createElement("li");
            item.textContent = facultad;

            // Crear botón de eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "❌";
            btnEliminar.onclick = function () {
                listaFacultades.removeChild(item);
                // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
                actualizarPrologDespuésDeEliminar(facultad,"FACULTAD");
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
        let listaCarreras = document.getElementById("CARRERA");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = carrera;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaCarreras.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar(carrera,"CARRERA");
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
        let listaAptitudes = document.getElementById("APTITUD");

        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = aptitud;

        // Crear botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            listaAptitudes.removeChild(item);
            // Eliminar también de sessionStorage y actualizar Prolog después de eliminar
            actualizarPrologDespuésDeEliminar(aptitud, "APTITUD");
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