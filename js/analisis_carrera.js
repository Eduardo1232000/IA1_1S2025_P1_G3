var session = pl.create(5000);
let CodigoProlog = "";
let aptitudes_usuario = [];
let habilidades_usuario = [];
let intereses_usuario = [];
let preferencias_usuario = [];

colores_relleno = [
    'rgba(255, 99, 216, 0.5)',
    'rgba(169, 192, 75, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(75, 192, 104, 0.5)',
    'rgba(225, 17, 17, 0.5)',
    'rgba(182, 192, 75, 0.5)',
    'rgba(187, 131, 28, 0.5)',
]

colores_borde = [
    'rgba(255, 99, 132, 1)',
    'rgba(169, 192, 75, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(75, 192, 104, 1)',
    'rgba(225, 17, 17, 1)',
    'rgba(182, 192, 75, 1)',
    'rgba(187, 131, 28, 1)',
]

window.onload = function () {
    validar_codigo_prolog()
    obtener_intereses()
    obtener_aptitudes()
    obtener_habilidades()
    obtener_preferencias()
};
const crear_grafica_facultad = (titulos, valores) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: titulos,
            datasets: [
                {
                    data: valores,
                    backgroundColor: colores_relleno,
                    borderColor: colores_borde,
                    borderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            cutout: 0,
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Color del texto de la leyenda
                    }
                }
            },
        },
    });
}
const crear_grafica_carrera = (titulos, valores) => {
    const ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: titulos,
            datasets: [
                {
                    data: valores,
                    backgroundColor: colores_relleno,
                    borderColor: colores_borde,
                    borderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            cutout: 0,
            plugins: {
                legend: {
                    display: false // Oculta la leyenda
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white' // Color del texto del eje X
                    }
                },
                y: {
                    ticks: {
                        color: 'white' // Color del texto del eje Y
                    }
                }
            }
        },
    });
}
function validar_codigo_prolog() {
    return new Promise((resolve, reject) => {
        try {
            CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG");
            const select = document.getElementById("ESTUDIANTE_SELECCIONAR_APTITUD");
            select.innerHTML = "";
            if (CodigoProlog === null) {
                console.log("No hay código almacenado!");
                if (select.options.length === 0) {
                    const option = document.createElement("option");
                    option.text = "Vacio";
                    option.value = "";
                    select.appendChild(option);
                }
            } else {
                console.log("HAY CÓDIGO ALMACENADO");
                session = pl.create(5000);
                session.consult(CodigoProlog, {
                    success: function () {
                        console.log("Código cargado correctamente.");
                    },
                    error: function (err) {
                        console.log("Error al cargar el código Prolog:", err);
                    }
                });
            }
        } catch (error) {
            console.log("ERROR AL OBTENER CÓDIGO PROLOG", error);
        }
    });
}
function obtener_aptitudes() {
    reiniciarSesion()
    const query = 'aptitud_unico(X).';
    const select = document.getElementById("ESTUDIANTE_SELECCIONAR_APTITUD");
    select.innerHTML = "";
    session.query(query, {
        success: function () {
            session.answers(x => {
                if (x === false) {  //LLEGA AL FINAL DE LA RESPUESTA
                    return;
                }
                const valor = x.lookup("X").toString();
                const option = document.createElement("option");
                option.text = valor;
                option.value = valor;
                select.appendChild(option);
            });
        },
        fail: function () {
            console.log("No hay resultados.");
        },
        error: function (err) {
            console.log(err);
        }
    });
}
function obtener_habilidades() {
    reiniciarSesion()
    const query = 'habilidad_unica(X).';
    const contenedor = document.getElementById("ESTUDIANTE_DIV_HABILIDADES");
    contenedor.innerHTML = "";
    let tiene_valores = false;  //PARA VER SI ENCONTRO O NO HABILIDADES
    session.query(query, {
        success: function () {
            session.answers(x => {
                if (x === false) {  //LLEGA AL FINAL DE LA RESPUESTA
                    if (tiene_valores === false) {
                        console.log("NO ENCONTRO HABILIDADES")
                    }
                    return;
                }
                else {
                    try {
                        const valor = x.lookup("X").toString();
                        tiene_valores = true
                        let nueva_aptitud = document.createElement("div");              //CREA UN DIV
                        nueva_aptitud.classList.add("elemento_aptitud");
                        let textoElemento = document.createElement("span");             //CREA EL TEXTO
                        textoElemento.textContent = valor;
                        let botonEliminar = document.createElement("button");           //CREA EL BOTON
                        botonEliminar.textContent = "No";
                        botonEliminar.classList.add("div_boton_habilidad")
                        botonEliminar.onclick = function () {
                            if (habilidades_usuario.includes(valor)) {
                                habilidades_usuario = habilidades_usuario.filter(item => item !== valor);
                                botonEliminar.style.backgroundColor = "red";
                                botonEliminar.textContent = "No"
                            } else {
                                habilidades_usuario.push(valor)
                                botonEliminar.style.backgroundColor = "green"
                                botonEliminar.textContent = "Si"
                            }
                        };
                        nueva_aptitud.appendChild(textoElemento);                       //LO AGREGA AL DIV
                        nueva_aptitud.appendChild(botonEliminar);
                        contenedor.appendChild(nueva_aptitud);                          //AGREGA DIV AL CONTENEDOR
                    } catch (error) {
                        console.log("OCURRIO UN ERROR AL OBTENER HABILIDADES: ", error)
                    }
                }
            });
        },
        fail: function () {
            console.log("No hay resultados.");
        },
        error: function (err) {
            console.log(err);
        }
    });
}
function obtener_intereses() {
    reiniciarSesion()
    const query = 'interes_unico(X).';
    const contenedor = document.getElementById("ESTUDIANTE_DIV_INTERESES");
    contenedor.innerHTML = "";
    let tiene_valores = false;
    session.query(query, {
        success: function () {
            session.answers(x => {
                if (x === false) {  //LLEGA AL FINAL DE LA RESPUESTA
                    if (!tiene_valores) {
                        console.log("NO ENCONTRO INTERESES")
                    }
                    return;
                }
                else {
                    try {
                        const valor = x.lookup("X").toString();
                        tiene_valores = true
                        let nueva_aptitud = document.createElement("div");              //CREA UN DIV
                        nueva_aptitud.classList.add("elemento_aptitud");
                        let textoElemento = document.createElement("span");             //CREA EL TEXTO
                        textoElemento.textContent = valor;
                        let cuadro_texto = document.createElement("input");
                        cuadro_texto.classList.add("div_input_porcentaje")
                        cuadro_texto.addEventListener("input", function () {
                            let valor_p = cuadro_texto.value.trim();
                            var encontro = false
                            var valido = false
                            if (!isNaN(valor_p) && valor_p > 0 && valor_p <= 100 && valor_p !== "") {   //VALIDA QUE SEA UN NUMERO ENTRE 0 Y 100
                                valido = true
                            }
                            for (let i = 0; i < intereses_usuario.length; i++) {
                                if (intereses_usuario[i][0] == valor) {
                                    encontro = true
                                    if (valido === false) {
                                        intereses_usuario.splice(i, 1);
                                    } else {
                                        intereses_usuario[i][1] = parseFloat(valor_p);
                                    }
                                    break;
                                }
                            }
                            if (encontro === false && valido === true) {
                                intereses_usuario.push([valor, valor_p])
                            }
                        });
                        nueva_aptitud.appendChild(textoElemento);                       //LO AGREGA AL DIV
                        nueva_aptitud.appendChild(cuadro_texto);
                        contenedor.appendChild(nueva_aptitud);                          //AGREGA DIV AL CONTENEDOR
                    } catch (error) {
                        console.log("OCURRIO UN ERROR AL OBTENER HABILIDADES: ", error)
                    }
                }
            });
        },
        fail: function () {
            console.log("No hay resultados.");
        },
        error: function (err) {
            console.log(err);
        }
    });
}
async function obtener_preferencias() {
    const preguntas = await obtener_preguntas();
    obtener_respuestas(preguntas)
}
function obtener_preguntas() {
    return new Promise((resolve, reject) => {
        const queryPreguntas = 'pregunta(ID, Pregunta).';
        const preguntas = [];
        reiniciarSesion()
        session.query(queryPreguntas, {
            success: function () {
                session.answers(x => {
                    if (x === false) {
                        resolve(preguntas);
                        return;
                    } else {
                        try {
                            const idPregunta = x.lookup("ID").toString();
                            const textoPregunta = x.lookup("Pregunta").toString();
                            preguntas.push({ id: idPregunta, texto: textoPregunta });
                        } catch (error) {
                            console.log("OCURRIO UN ERROR AL OBTENER PREGUNTAS: ", error);
                            reject(error);
                        }
                    }
                });
            },
            fail: function () {
                console.log("No hay preguntas.");
                resolve(preguntas);
            },
            error: function (err) {
                console.log(err);
                reject(err);
            }
        });
    });
}
function obtener_respuestas(preguntas) {
    const contenedor = document.getElementById("ESTUDIANTE_DIV_PREFERENCIAS");
    contenedor.innerHTML = "";
    preguntas.forEach((pregunta, index) => {
        reiniciarSesion()   //PARA QUE NO FALLE
        const queryRespuestas = `respuesta(${pregunta.id}, Respuesta).`;
        session.query(queryRespuestas, {
            success: function () {
                let contenedorPregunta = document.createElement("div");
                contenedorPregunta.classList.add("elemento_preferencia");
                let textoPreguntaElemento = document.createElement("h3");
                textoPreguntaElemento.textContent = pregunta.texto;
                contenedorPregunta.appendChild(textoPreguntaElemento);

                session.answers(y => {
                    if (y === false) {  // Fin de las respuestas
                        contenedor.appendChild(contenedorPregunta);
                        return;
                    } else {
                        try {
                            const textoRespuesta = y.lookup("Respuesta").toString();

                            let inputRespuesta = document.createElement("input");
                            inputRespuesta.type = "radio";
                            inputRespuesta.name = `pregunta_${pregunta.id}`;
                            inputRespuesta.value = textoRespuesta;
                            inputRespuesta.addEventListener("change", () => {
                                var encontro = false
                                for (let i = 0; i < preferencias_usuario.length; i++) {
                                    if (preferencias_usuario[i][0] == pregunta.id) {
                                        encontro = true
                                        preferencias_usuario[i][1] = textoRespuesta
                                        break;
                                    }
                                }
                                if (encontro === false) {
                                    preferencias_usuario.push([pregunta.id, textoRespuesta])
                                }
                            });

                            let labelRespuesta = document.createElement("label");
                            labelRespuesta.textContent = textoRespuesta;

                            contenedorPregunta.appendChild(inputRespuesta);
                            contenedorPregunta.appendChild(labelRespuesta);
                        } catch (error) {
                            console.log("OCURRIO UN ERROR AL OBTENER RESPUESTAS: ", error);
                        }
                    }
                });
            },
            fail: function () {
                console.log(`No hay respuestas para la pregunta ${pregunta.id}.`);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
}
function agregar_aptitud() {
    const valor_select = document.getElementById("ESTUDIANTE_SELECCIONAR_APTITUD").value;
    const contenedor = document.getElementById("ESTUDIANTE_DIV_APTITUDES");
    if (!aptitudes_usuario.includes(valor_select) && aptitudes_usuario.length < 3) {
        aptitudes_usuario.push(valor_select);

        let nueva_aptitud = document.createElement("div");              //CREA UN DIV
        nueva_aptitud.classList.add("elemento_aptitud");

        let textoElemento = document.createElement("span");             //CREA EL TEXTO
        textoElemento.textContent = valor_select;

        let botonEliminar = document.createElement("button");           //CREA EL BOTON
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("div_boton_eliminar")
        botonEliminar.onclick = function () {
            contenedor.removeChild(nueva_aptitud);
            aptitudes_usuario = aptitudes_usuario.filter(item => item !== valor_select);
        };
        nueva_aptitud.appendChild(textoElemento);                       //LO AGREGA AL DIV
        nueva_aptitud.appendChild(botonEliminar);

        contenedor.appendChild(nueva_aptitud);                          //AGREGA DIV AL CONTENEDOR
    }
    else {
        if (aptitudes_usuario.includes(valor_select)) {
            alert("Aptitud ya agregada")
        } else { alert("Maximo 3 Aptitudes") }
    }
}
function reiniciarSesion() {
    session = pl.create(5000); // Reinicia la sesión
    session.consult(CodigoProlog, {
        success: function () {
            console.log("Sesión reiniciada correctamente.");
        },
        error: function (err) {
            console.log("Error al reiniciar la sesión:", err);
        }
    });
}
function obtener_facultades_analisis() {
    return new Promise((resolve, reject) => {
        var nueva_apt = "aptitudes_usuario(["
        for (const interes of aptitudes_usuario) {
            nueva_apt += "\'" + interes + "\',"
        }
        nueva_apt = nueva_apt.slice(0, -1);
        nueva_apt += "])."

        var nueva_hab = "habilidades_usuario(["
        for (const interes of habilidades_usuario) {
            nueva_hab += "\'" + interes + "\',"
        }
        nueva_hab = nueva_hab.slice(0, -1);
        nueva_hab += "])."

        var nueva_interes = "intereses_usuario(["
        for (const interes of intereses_usuario) {
            nueva_interes += "(\'" + interes[0] + "\'," + interes[1] + "),"
        }
        nueva_interes = nueva_interes.slice(0, -1);
        nueva_interes += "])."

        var nueva_preferencia = "preferencias_usuario(["
        for (const preferencia of preferencias_usuario) {
            nueva_preferencia += "(\'" + preferencia[0] + "\',\'" + preferencia[1] + "\'),"
        }
        nueva_preferencia = nueva_preferencia.slice(0, -1);
        nueva_preferencia += "])."

        CodigoProlog += "\n\n" + nueva_apt + "\n" + nueva_hab + "\n" + nueva_interes + "\n" + nueva_preferencia //AGREGA AL CODIGO PROLOG TEMPORAL LOS DATOS PARA LA CONSUTLA
        reiniciarSesion()
        const query = 'obtener_lista_facultades(X, Y).';
        const contenedor = document.getElementById("ESTUDIANTE_DIV_FACULTADES");
        contenedor.innerHTML = "";
        let carrera_ganador = "";
        session.query(query, {
            success: function () {
                session.answers(x => {
                    if (x === false) {  //LLEGA AL FINAL DE LA RESPUESTA
                        resolve(carrera_ganador);
                        return;
                    }
                    if (pl.format_answer(x) !== "limit exceeded") {
                        const valor = x.lookup("X").toString().replace(/\[|\]/g, ""); // Quita los corchetes
                        const valor2 = x.lookup("Y").toString().replace(/\[|\]/g, "");

                        const valoresArray = valor.split(",").map(item => item.trim());
                        const valoresArray2 = valor2.split(",").map(Number);
                        const indiceMayor = valoresArray2.reduce((maxIndex, val, index, arr) =>
                            val > arr[maxIndex] ? index : maxIndex, 0
                        );
                        const total = valoresArray2.reduce((sum, num) => sum + num, 0);
                        const porcentajes = valoresArray2.map(valor => ((valor / total) * 100).toFixed(2));
                        const combinado = porcentajes.map((valor, index) => ({
                            valor,
                            texto: valoresArray[index]
                        }));
                        combinado.sort((a, b) => b.valor - a.valor);
                        carrera_ganador = valoresArray[indiceMayor]
                        crear_grafica_facultad(valoresArray, porcentajes)
                        combinado.forEach((val, index) => {
                            try {
                                let nuevo_val = document.createElement("div");              //CREA UN DIV
                                nuevo_val.classList.add("elemento_result");

                                let textoElemento = document.createElement("span");             //CREA EL TEXTO
                                textoElemento.textContent = val.texto;
                                textoElemento.classList.add("texto_result");

                                let textoElemento2 = document.createElement("span");             //CREA EL TEXTO
                                textoElemento2.textContent = val.valor;
                                textoElemento2.classList.add("numero_result");

                                nuevo_val.appendChild(textoElemento);                       //LO AGREGA AL DIV
                                nuevo_val.appendChild(textoElemento2);
                                contenedor.appendChild(nuevo_val);                          //AGREGA DIV AL CONTENEDOR

                            } catch (error) {
                                console.log("OCURRIO UN ERROR AL OBTENER HABILIDADES: ", error)
                            }
                        });
                    }
                });
            },
            fail: function () {
                console.log("No hay resultados.");
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
}
async function analizar() {
    const carrera_g = await obtener_facultades_analisis();
    const carreras = await obtener_carreras_ganador(carrera_g);
    obtener_valoracion_carreras(carrera_g, carreras)
    avanzar_2()
}
function obtener_carreras_ganador(carrera) {
    return new Promise((resolve, reject) => {
        const query = 'facultad(\'' + carrera + '\', X).';
        reiniciarSesion()
        let tiene_valores = false;
        var lista_carreras = []
        session.query(query, {
            success: function () {
                session.answers(x => {
                    if (x === false) {  //LLEGA AL FINAL DE LA RESPUESTA
                        if (tiene_valores === false) {
                            console.log("NO ENCONTRO HABILIDADES")
                        }
                        resolve(lista_carreras)
                        return;
                    }
                    else {
                        try {
                            const valor = x.lookup("X").toString();
                            tiene_valores = true
                            lista_carreras.push(valor)
                        } catch (error) {
                            console.log("OCURRIO UN ERROR AL OBTENER HABILIDADES: ", error)
                        }
                    }
                });
            },
            fail: function () {
                console.log("No hay resultados.");
            },
            error: function (err) {
                console.log("ERROR")
                console.log(err);
            }
        });
    });
}
function obtener_valoracion_carreras(carrera, lista_c) {
    const query = 'obtener_lista_carreras(\'' + carrera + '\', X).';
    reiniciarSesion()
    const contenedor = document.getElementById("ESTUDIANTE_DIV_CARRERAS");
    contenedor.innerHTML = "";
    let tiene_valores = false;
    session.query(query, {
        success: function () {
            session.answers(x => {
                if (x === false) {  //LLEGA AL FINAL DE LA RESPUESTA
                    return;
                }
                if (pl.format_answer(x) !== "limit exceeded") {
                    const valor = x.lookup("X").toString().replace(/\[|\]/g, ""); // Quita los corchetes
                    const valoresArray = valor.split(",").map(Number);
                    const total = valoresArray.reduce((sum, num) => sum + num, 0);
                    const porcentajes = valoresArray.map(valor => ((valor / total) * 100).toFixed(2));
                    const combinado = porcentajes.map((valor, index) => ({
                        valor,
                        texto: lista_c[index]
                    }));
                    combinado.sort((a, b) => b.valor - a.valor);
                    crear_grafica_carrera(lista_c, porcentajes)
                    combinado.forEach((val, index) => {
                        try {
                            let nuevo_val = document.createElement("div");              //CREA UN DIV
                            nuevo_val.classList.add("elemento_result");
                            let textoElemento = document.createElement("span");             //CREA EL TEXTO
                            textoElemento.textContent = val.texto;
                            textoElemento.classList.add("texto_result");
                            let textoElemento2 = document.createElement("span");             //CREA EL TEXTO
                            textoElemento2.textContent = val.valor;
                            textoElemento2.classList.add("numero_result");

                            nuevo_val.appendChild(textoElemento);                       //LO AGREGA AL DIV
                            nuevo_val.appendChild(textoElemento2);
                            contenedor.appendChild(nuevo_val);                          //AGREGA DIV AL CONTENEDOR

                        } catch (error) {
                            console.log("OCURRIO UN ERROR AL OBTENER HABILIDADES: ", error)
                        }
                    });
                }                       //AGREGA DIV AL CONTENEDOR
            });
        },
        fail: function () {
            console.log("No hay resultados.");
        },
        error: function (err) {
            console.log(err);
        }
    });
}
function avanzar_1() {
    document.getElementById("ESTUDIANTE_DIV_PARTE1").classList.add("oculto");
    document.getElementById("ESTUDIANTE_DIV_PARTE2").classList.remove("oculto");
    document.getElementById("ESTUDIANTE_DIV_PARTE3").classList.add("oculto");
}
function avanzar_2() {
    document.getElementById("ESTUDIANTE_DIV_PARTE1").classList.add("oculto");
    document.getElementById("ESTUDIANTE_DIV_PARTE2").classList.add("oculto");
    document.getElementById("ESTUDIANTE_DIV_PARTE3").classList.remove("oculto");
    document.getElementById("ESTUDIANTE_TITULO").innerText = "Resultados"
}
function regresar_2() {
    document.getElementById("ESTUDIANTE_DIV_PARTE1").classList.remove("oculto");
    document.getElementById("ESTUDIANTE_DIV_PARTE2").classList.add("oculto");
    document.getElementById("ESTUDIANTE_DIV_PARTE3").classList.add("oculto");
}