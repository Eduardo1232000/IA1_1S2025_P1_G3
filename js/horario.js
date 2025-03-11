let session = pl.create()
let CodigoProlog = ""
let selectedCourses = []

window.onload = function () {
    validar_codigo_prolog()
}

function validar_codigo_prolog() {
    try {
        CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG")
        if (!CodigoProlog) {
            alert("ERROR: No se ha cargado ningún archivo .pl. Por favor, regresa y sube tu base de conocimiento.")
            return
        } else {
            console.log("HAY CÓDIGO ALMACENADO:")
            cargarBaseConocimiento()
        }
    } catch (error) {
        console.error("ERROR AL OBTENER CÓDIGO PROLOG", error)
    }
}

function cargarBaseConocimiento() {
    session.consult(CodigoProlog, {
        success: function () {
            console.log("Base Prolog cargada correctamente.")
            mostrarCursos()
        },
        error: function (err) {
            console.error("Error al cargar la base de conocimiento:", err)
            alert("Error en la sintaxis del archivo .pl")
        }
    })
}


function parseHorariosTerm(horTerm) {
    if (horTerm.indicator === "[]/0") {
      return []
    }
    if (horTerm.indicator === "./2") {
      const head = horTerm.args[0]
      const tail = horTerm.args[1]
      return [ parseSingleHorario(head) ].concat(parseHorariosTerm(tail))
    }
    return [ parseSingleHorario(horTerm) ]
  }
  
  function parseSingleHorario(term) {
    if (term.indicator === "-/2") {
      const left  = term.args[0]
      const right = term.args[1] 
  
      if (left.indicator === "-/2") {
        let day    = left.args[0].id   || "??"   
        let start  = left.args[1].value
        let end    = right.value               
        return { day, start, end }
      }
    }
    return { day: "??", start: null, end: null }
  }
  

  function mostrarCursos() {
    const contenedor = document.getElementById("HORARIO_DIV_CURSOS")
    contenedor.innerHTML = ""
  
    let tabla = document.createElement("table")
    tabla.classList.add("cursosdisponibles")
  
    let thead = document.createElement("thead")
    thead.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Sección</th>
        <th>Día</th>
        <th>Hora Inicio</th>
        <th>Hora Fin</th>
        <th>Agregar</th>
      </tr>`
    tabla.appendChild(thead)
  
    let tbody = document.createElement("tbody")
    tabla.appendChild(tbody)
  
    session.query("curso(ID, Nombre), seccion(ID, Sec, Horarios).", {
      success: function() {
        session.answers(answer => {
          if (answer) {
            let idCurso  = answer.links.ID.id
            let nomCurso = answer.links.Nombre.id
            let secCurso = answer.links.Sec.id
            let horTerm  = answer.links.Horarios
  
            let horariosArray = parseHorariosTerm(horTerm)
  
            if (horariosArray.length === 0) {
              let filaVacia = document.createElement("tr")
              filaVacia.innerHTML = `
                <td>${idCurso}</td>
                <td>${nomCurso}</td>
                <td>${secCurso}</td>
                <td colspan="3">(Sin días ni horas)</td>
                <td>
                  <button 
                  class="addButton" 
                  onclick="agregarACursosSeleccionados('${idCurso}','${nomCurso}','${secCurso}','', '', '')">
                    Agregar
                  </button>
                </td>`
              tbody.appendChild(filaVacia)
            } else {
              horariosArray.forEach(h => {
                let fila = document.createElement("tr")
                fila.innerHTML = `
                  <td>${idCurso}</td>
                  <td>${nomCurso}</td>
                  <td>${secCurso}</td>
                  <td>${h.day}</td>
                  <td>${h.start}</td>
                  <td>${h.end}</td>
                  <td>
                    <button 
                      class="addButton" 
                      onclick="agregarACursosSeleccionados('${idCurso}','${nomCurso}','${secCurso}','${h.day}','${h.start}','${h.end}')">
                      Agregar
                    </button>
                  </td>`
                tbody.appendChild(fila)
              })
            }
  
          } else {
            contenedor.appendChild(tabla)
          }
        })
      },
      error: function(err) {
        console.error("Error al consultar cursos/secciones:", err)
      }
    })
  }
  

function agregarACursosSeleccionados(idCurso, nomCurso, seccion, day, start, end) {
    let existe = selectedCourses.find(item =>
      item.id === idCurso && item.seccion === seccion
    )
    if (existe) {
      alert(`El curso ${nomCurso}, sección ${seccion}, ya está seleccionado.`)
      return
    }
    selectedCourses.push({
      id: idCurso,
      nombre: nomCurso,
      seccion: seccion,
      horarios: [{ day, start, end }]
    })
    mostrarCursosSeleccionados()
  }

function eliminarCursoSeleccionado(idCurso) {
    selectedCourses = selectedCourses.filter(c => c.id !== idCurso)
    mostrarCursosSeleccionados()
}

function mostrarCursosSeleccionados() {
    const contenedor = document.getElementById("HORARIO_DIV_SELECCIONADOS")
    contenedor.innerHTML = ""
  
    if (selectedCourses.length === 0) {
      contenedor.innerHTML += "<p>No hay cursos seleccionados.</p>"
      return
    }
  
    let tabla = document.createElement("table")
    tabla.classList.add("cursosdisponibles")
  
    let thead = document.createElement("thead")
    thead.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Sección</th>
        <th>Dia</th>
        <th>Hora Inicio</th>
        <th>Hora Fin</th>
      </tr>`
    tabla.appendChild(thead)
  
    let tbody = document.createElement("tbody")
    tabla.appendChild(tbody)
  
    selectedCourses.forEach(item => {
      let fila = document.createElement("tr")
      fila.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nombre}</td>
        <td>${item.seccion}</td>
        <td>${item.horarios.map(h => `${h.day}`)}</td>
        <td>${item.horarios.map(h => `${h.start}`)}</td>
        <td>${item.horarios.map(h => `${h.end}`)}</td>
        <td>
          <button 
          class="deleteButton"
          onclick="eliminarCursoSeleccionado('${item.id}')">Eliminar</button>
        
        </td>
        `

      tbody.appendChild(fila)
    })
  
    contenedor.appendChild(tabla)
  }
  
  function sugerir() {
    document.getElementById("HORARIO_DIV_PARTE1").classList.add("oculto");
    document.getElementById("HORARIO_DIV_PARTE2").classList.remove("oculto");
    if (selectedCourses.length === 0) {
      const contenedor = document.getElementById("HORARIO_DIV");
      contenedor.innerHTML = "<p>No hay cursos seleccionados.</p>";
      return;
    }
  
    mostrarHorarioOptimo();
  }
  
function mostrarHorarioOptimo() {
  const contenedor = document.getElementById("HORARIO_DIV");
  contenedor.innerHTML = "<h3>Horario Generado</h3>";

  let uniqueIds = [...new Set(selectedCourses.map(c => c.id))];

  let prologList = "[" + uniqueIds.map(id => `'${id}'`).join(",") + "]";
  console.log("prologList:", prologList);

  let query = `horario_optimo(${prologList}, X).`;

  let tabla = document.createElement("table");
  let tbody = document.createElement("tbody");
  tabla.appendChild(tbody);

  session.query(query, {
    success: function() {
      session.answers(answer => {
        if (answer) {
          
          console.log(answer.links.X.id);
          let horario = answer.links.X.id;
          let pl = pl.type;
          let horarioArray = pl.format_answer(horario);
          console.log("horarioArray:", horarioArray);
          let fila = document.createElement("tr");
        
          fila.innerHTML = `<td>${pl.format_answer(answer)}</td>`;
          tbody.appendChild(fila);
        } else {
          
          contenedor.appendChild(tabla);
        }
      });
    },
    error: function(err) {
      console.error("Error al consultar horario_optimo:", err);
      contenedor.innerHTML += "<p>Error al generar el horario óptimo.</p>";
    }
  });
}



function redirigir(url) {
    window.location.href = url
}
