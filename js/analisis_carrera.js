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

function agregar() {
    alert("No implementado")
}

