$(document).ready(function(){
    LlenarTablaCarrito();
});

function LlenarTablaCarrito() {
    $("#TablaCarrito tbody").empty();
    var filaArticulo = "";
    var filaAlimento = "";
    var precioAlimento = 0;
    var precioArticulo = 0;
    var precioTotal = 0;
    var usuario = localStorage.getItem("IdUsuario");
    $.get("https://desarrollowebapi.azurewebsites.net/api/Venta/" + usuario, function (Venta) {
        console.log(Venta);
        Venta.forEach(item => {
            if (item.alimentoId != null) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.alimentoId, function (Proveedor) {
                    $.get("https://desarrollowebapi.azurewebsites.net/api/Alimento/Get/" + item.alimentoId, function (Alimento) {
                        filaAlimento =
                            "<tr>" +
                            "<td>" + Alimento.titulo_Alimento + "</td>" +
                            "<td>" + Proveedor.nombre + "</td>" +
                            "<td>" + Alimento.precio_Alimento + "</td>" +
                            "</tr>";
                        $("#TablaCarrito > tbody").append(filaAlimento);
                        precioAlimento = parseInt(precioAlimento) + parseInt(Alimento.precio_Alimento);
                    });
                });
            }
        });
        Venta.forEach(item => {
            if (item.articuloId != null) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.articuloId, function (Proveedor) {
                    $.get("https://desarrollowebapi.azurewebsites.net/api/Articulo/Get/" + item.articuloId, function (Articulo) {
                        filaArticulo =
                            "<tr>" +
                            "<td>" + Articulo.nombre_Articulo + "</td>" +
                            "<td>" + Proveedor.nombre + "</td>" +
                            "<td>" + Articulo.precio_Articulo + "</td>" +
                            "</tr>";
                        $("#TablaCarrito > tbody").append(filaArticulo);

                        precioArticulo = parseInt(precioArticulo) + parseInt(Articulo.precio_Articulo);
                        precioTotal = parseInt(precioAlimento) + parseInt(precioArticulo);
                        $("#Total").val("₡ " + precioTotal);
                    });
                });
            }
        });
    });
}