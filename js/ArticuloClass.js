$(document).ready(function () {
    TarjetaArticuloPerroDisplay();
    TarjetaArticuloGatoDisplay();
    TarjetaArticuloRoedorDisplay();
    MostrarArticulo();
});

function TarjetaArticuloPerroDisplay() {
    var tarjetaArticulo = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Articulo/", function (respuesta) {
        console.log(respuesta);
        $("#TituloArticuloPerro").html("Articulos Para Caninos");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    if (item.tipo_Articulo === "Perro") {
                        tarjetaArticulo +=
                            "<div class='col-sm-10 col-lg-6'>" +
                            "<div class='card h-100' style='width: 24rem;'>" +
                            "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                            "<div class='card-body'>" +
                            "<h5 class='card-title'>" + item.nombre_Articulo + "</h5>" +
                            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                            "<p class='card-text'>Precio: " + item.precio_Articulo + "</p>" +
                            "<a href='#' class='btn btn-primary'>Comprar</a>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>";
                        $("#ArticuloPerro").html(tarjetaArticulo);
                    }
                });
            });
        });
    });
}

function TarjetaArticuloGatoDisplay() {
    var tarjetaArticulo = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Articulo/", function (respuesta) {
        console.log(respuesta);
        $("#TituloArticuloGato").html("Articulos Para Felinos");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    if (item.tipo_Articulo === "Gato") {
                        tarjetaArticulo +=
                            "<div class='col-sm-10 col-lg-6'>" +
                            "<div class='card h-100' style='width: 24rem;'>" +
                            "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                            "<div class='card-body'>" +
                            "<h5 class='card-title'>" + item.nombre_Articulo + "</h5>" +
                            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                            "<p class='card-text'>Precio: " + item.precio_Articulo + "</p>" +
                            "<a href='#' class='btn btn-primary'>Comprar</a>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>";
                        $("#ArticuloGato").html(tarjetaArticulo);
                    }
                });
            });
        });
    });
}

function TarjetaArticuloRoedorDisplay() {
    var tarjetaArticulo = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Articulo/", function (respuesta) {
        console.log(respuesta);
        $("#TituloArticuloRoedor").html("Articulos Para Roedores");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    if (item.tipo_Articulo === "Roedor") {
                        tarjetaArticulo +=
                            "<div class='col-sm-10 col-lg-6'>" +
                            "<div class='card h-100' style='width: 24rem;'>" +
                            "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                            "<div class='card-body'>" +
                            "<h5 class='card-title'>" + item.nombre_Articulo + "</h5>" +
                            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                            "<p class='card-text'>Precio: " + item.precio_Articulo + "</p>" +
                            "<a href='#' class='btn btn-primary'>Comprar</a>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>";
                        $("#ArticuloRoedor").html(tarjetaArticulo);
                    }
                });
            });
        });
    });
}

function MostrarArticulo() {
    $("#ArticuloRoedor").prop("hidden", false);
    $("#TituloArticuloRoedor").prop("hidden", false);
    $("#ArticuloGato").prop("hidden", false);
    $("#TituloArticuloGato").prop("hidden", false);
    $("#ArticuloPerro").prop("hidden", false);
    $("#TituloArticuloPerro").prop("hidden", false);
    $("#Cerrar").prop("hidden", true);
    $("#TituloBuscar").prop("hidden", true);
    $("#Resultado").prop("hidden", true);
    $("hr").prop("hidden", false);
    $("br").prop("hidden", false);
    $(".BrEspecial").prop("hidden", true);
    $("#TextoBuscar").html("");
}

function BuscarArticuloPorTitulo() {
    $("#ArticuloRoedor").prop("hidden", true);
    $("#TituloArticuloRoedor").prop("hidden", true);
    $("#ArticuloGato").prop("hidden", true);
    $("#TituloArticuloGato").prop("hidden", true);
    $("#ArticuloPerro").prop("hidden", true);
    $("#TituloArticuloPerro").prop("hidden", true);
    $("hr").prop("hidden", true);
    $("br").prop("hidden", true);
    $(".BrEspecial").prop("hidden", false);
    $("#Cerrar").prop("hidden", false);
    $("#Resultado").prop("hidden", false);
    $("#TituloBuscar").prop("hidden", false);
    var textoBuscar = $("#TextoBuscar").val();
    var tarjeta = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Articulo/Busqueda/" + textoBuscar, function (respuesta) {
        $("#TituloBuscar").html("Resultados de la Búsqueda");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    tarjeta +=
                        "<div class='col-sm-10 col-lg-6'>" +
                        "<div class='card h-100' style='width: 24rem;'>" +
                        "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                        "<div class='card-body'>" +
                        "<h5 class='card-title'>" + item.nombre_Articulo + "</h5>" +
                        "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                        "<p class='card-text'>Precio: " + item.precio_Articulo + "</p>" +
                        "<a id='Comprar' class='btn btn-primary'>Comprar</a>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</div>";
                    $("#Resultado").html(tarjeta);
                });
            });
        });
    });
}