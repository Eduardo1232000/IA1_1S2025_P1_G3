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
            : (console.log("HAY CODIGO ALMACENADO"), console.log(CodigoProlog),document.getElementById("STATUS_PROLOG").style.backgroundColor = "green");
    } catch (error) {
        console.log("ERROR AL OBTENER CODIGO PROLOG")
        console.log(error)
    }
}

document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        CodigoProlog = e.target.result;
        session = pl.create(1000);
        session.consult(CodigoProlog, {
            success: function () {
                console.log("EXITO AL CARGAR")
                console.log(CodigoProlog)
                document.getElementById("STATUS_PROLOG").style.backgroundColor = "green"
                sessionStorage.setItem("CODIGO_PROLOG", CodigoProlog);
            },
            error: function (err) {
                console.log("Error al cargar el código: " + err);
            }
        });
    };
    reader.readAsText(file);
});


function AccionSiguiente() {
    alert("No Implementado")
}

