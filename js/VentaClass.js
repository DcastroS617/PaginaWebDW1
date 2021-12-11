$(document).ready(function () {
    LlenarTablaCarrito();
});

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

function LlenarTablaCarrito() {
    $("#TablaCarrito > tbody").empty();
    var filaArticulo = "";
    var filaAlimento = "";
    var usuario = localStorage.getItem("IdUsuario");
    $.get("https://desarrollowebapi.azurewebsites.net/api/Venta/" + usuario, function (Venta) {
        console.log(Venta);
        Venta.forEach(item => {
            if (item.alimentoId != null) {
                console.log(item.alimentoId);
                $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.alimentoId, function (Proveedor) {
                    $.get("https://desarrollowebapi.azurewebsites.net/api/Alimento/Get/" + item.alimentoId, function (Alimento) {
                        filaAlimento +=
                            "<tr>" +
                            "<td>" + Alimento.titulo_Alimento + "</td>" +
                            "<td>" + Proveedor.nombre + "</td>" +
                            "<td>" + Alimento.precio_Alimento + "</td>" +
                            "</tr>";
                        $("#TablaCarrito > tbody").append(filaAlimento);
                    });
                });
            }
            if (item.articuloId != null) {
                console.log(item.articuloId);
                $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.articuloId, function (Proveedor) {
                    $.get("https://desarrollowebapi.azurewebsites.net/api/Articulo/Get/" + item.articuloId, function (Articulo) {
                        filaArticulo +=
                            "<tr>" +
                            "<td>" + Articulo.nombre_Articulo + "</td>" +
                            "<td>" + Proveedor.nombre + "</td>" +
                            "<td>" + Articulo.precio_Articulo + "</td>" +
                            "</tr>";
                        $("#TablaCarrito > tbody").append(filaArticulo);
                    });
                });
            }
        });
    })
}