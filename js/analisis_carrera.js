let session = pl.create(1000);
let CodigoProlog = "";
window.onload = function () {
    validar_codigo_prolog();
};

function validar_codigo_prolog() {
    try {
        CodigoProlog = sessionStorage.getItem("CODIGO_PROLOG");
        (CodigoProlog === null)
            ? (console.log("No hay codigo Almacenado!"))
            : (console.log("HAY CODIGO ALMACENADO"), console.log(CodigoProlog));
    } catch (error) {
        console.log("ERROR AL OBTENER CODIGO PROLOG")
        console.log(error)
    }
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

function agregar() {
    alert("No implementado")
}


