

function ComprarArticulo(ArticuloId) {
    var login = localStorage.getItem("Login");
    var usuarioId = localStorage.getItem("IdUsuario");
    console.log(login);
    console.log(ArticuloId);
    console.log(usuarioId);
    if (login === "true") {

        const url = "https://desarrollowebapi.azurewebsites.net/api/Venta";
        var date = new Date();
        var mes = (parseInt(date.getMonth() + 1) >= 10 ? parseInt(date.getMonth() + 1) : '0' + parseInt(date.getMonth() + 1));
        var dia = (parseInt(date.getDate()) >= 10 ? date.getDate() : '0' + date.getDate());
        var definitivo = date.getFullYear() + '-' + mes + '-' + dia;
        console.log(definitivo);
        const item = {
            fecha_Venta: definitivo,
            alimentoId: null,
            articuloId: ArticuloId,
            usuarioId: usuarioId
        };

        //Post a la entidad de venta!, esta funcionalidad todavia esta en prueba, pero el post si lo hace.
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(respuesta => respuesta.json())
            .then(() => alert("Se añadio el producto al carrito de compras!"))
            .catch(error => console.error("No se pudo realizar la compra", error));
    } else {
        alert("Debes iniciar sesión para realizar la compra!");
    }
}

function ComprarAlimento(AlimentoId) {
    var login = localStorage.getItem("Login");
    var usuarioId = localStorage.getItem("IdUsuario");
    console.log(login);
    console.log(AlimentoId);
    console.log(usuarioId);
    if (login === "true") {
        const url = "https://desarrollowebapi.azurewebsites.net/api/Venta";
        var date = new Date();
        var mes = (parseInt(date.getMonth() + 1) >= 10 ? parseInt(date.getMonth() + 1) : '0' + parseInt(date.getMonth() + 1));
        var dia = (parseInt(date.getDate()) >= 10 ? date.getDate() : '0' + date.getDate());
        var definitivo = date.getFullYear() + '-' + mes + '-' + dia;
        console.log(definitivo);
        const item = {
            fecha_Venta: definitivo,
            alimentoId: AlimentoId,
            articuloId: null,
            usuarioId: usuarioId
        };

        //Post a la entidad de venta!, esta funcionalidad todavia esta en prueba, pero el post si lo hace.
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(respuesta => respuesta.json())
            .then(() => alert("Se añadio el producto al carrito de compras!"))
            .catch(error => console.error("No se pudo realizar la compra", error));
    } else {
        alert("Debes iniciar sesión para realizar la compra!");
    }
}


function Comprar() {
    var usuario = localStorage.getItem("IdUsuario");
    alert("Has realizado la compra!");
    window.location = "MenuPrincipal.html";
    try {
        $.get("https://desarrollowebapi.azurewebsites.net/api/Venta/Delete/" + usuario, function (respuesta) {          
        });
    } catch (error) {
        console.log(error);
    }

}