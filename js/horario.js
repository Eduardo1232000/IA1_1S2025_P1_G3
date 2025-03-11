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
function sugerir() {
    document.getElementById("HORARIO_DIV_PARTE1").classList.add("oculto");
    document.getElementById("HORARIO_DIV_PARTE2").classList.remove("oculto");
}

