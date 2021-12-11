
$(document).ready(function () {
    MostrarAlimento();
    TarjetaAlimentoPerroDisplay();
    TarjetaAlimentoGatoDisplay();
    TarjetaAlimentoRoedorDisplay();
});

function TarjetaAlimentoPerroDisplay() {
    var tarjetaAlimento = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Alimento/", function (respuesta) {
        console.log(respuesta);
        $("#TituloAlimentoPerro").html("Alimentos Para Caninos");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    if (item.tipo_Alimento === "Perro") {
                        tarjetaAlimento +=
                            "<div class='col-lg-6 col-md-6 col-sm-12'>" +
                            "<div class='card' style='width: 100%;'>" +
                            "<img class='card-img-top img_style' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                            "<div class='card-body'>" +
                            "<h5 class='card-title'>" + item.titulo_Alimento + "</h5>" +
                            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                            "<p class='card-text'>Precio: " + item.precio_Alimento + "</p>" +
                            `<a onclick='ComprarAlimento(${item.id})' class='Comprar btn btn-secondary'>Comprar</a>` +
                            "</div>" +
                            "</div>" +
                            "</div>";
                        $("#AlimentoPerro").html(tarjetaAlimento);
                    }
                });
            });
        });
    });
}

function TarjetaAlimentoGatoDisplay() {
    var tarjetaAlimento = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Alimento/", function (respuesta) {
        console.log(respuesta);
        $("#TituloAlimentoGato").html("Alimentos Para Felinos");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    if (item.tipo_Alimento === "Gato") {
                        tarjetaAlimento +=
                            "<div class='col-lg-6 col-md-6 col-sm-12'>" +
                            "<div class='card' style='width: 100%;'>" +
                            "<img class='card-img-top img_style' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                            "<div class='card-body'>" +
                            "<h5 class='card-title'>" + item.titulo_Alimento + "</h5>" +
                            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                            "<p class='card-text'>Precio: " + item.precio_Alimento + "</p>" +
                            `<a onclick='ComprarAlimento(${item.id})' class='Comprar btn btn-secondary'>Comprar</a>` +
                            "</div>" +
                            "</div>" +
                            "</div>";
                        $("#AlimentoGato").html(tarjetaAlimento);
                    }
                });
            });
        });
    });
}

function TarjetaAlimentoRoedorDisplay() {
    var tarjetaAlimento = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Alimento/", function (respuesta) {
        console.log(respuesta);
        $("#TituloAlimentoRoedor").html("Alimentos Para Roedores");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    if (item.tipo_Alimento === "Roedor") {
                        tarjetaAlimento +=
                            "<div class='col-lg-6 col-md-6 col-sm-12'>" +
                            "<div class='card' style='width: 100%;'>" +
                            "<img class='card-img-top img_style' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                            "<div class='card-body'>" +
                            "<h5 class='card-title'>" + item.titulo_Alimento + "</h5>" +
                            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                            "<p class='card-text'>Precio: " + item.precio_Alimento + "</p>" +
                            `<a onclick='ComprarAlimento(${item.id})' class='Comprar btn btn-secondary'>Comprar</a>` +
                            "</div>" +
                            "</div>" +
                            "</div>";
                        $("#AlimentoRoedor").html(tarjetaAlimento);
                    }
                });
            });
        });
    });
}
function MostrarAlimento() {
    $("#AlimentoRoedor").prop("hidden", false);
    $("#TituloAlimentoRoedor").prop("hidden", false);
    $("#AlimentoGato").prop("hidden", false);
    $("#TituloAlimentoGato").prop("hidden", false);
    $("#AlimentoPerro").prop("hidden", false);
    $("#TituloAlimentoPerro").prop("hidden", false);
    $("#Cerrar").prop("hidden", true);
    $("#TituloBuscar").prop("hidden", true);
    $("#Resultado").prop("hidden", true);
    $("hr").prop("hidden", false);
    $("br").prop("hidden", false);
    $(".BrEspecial").prop("hidden", true);
    $("#TextoBuscar").html("");
}
function BuscarPorTitulo() {
    $("#AlimentoRoedor").prop("hidden", true);
    $("#TituloAlimentoRoedor").prop("hidden", true);
    $("#AlimentoGato").prop("hidden", true);
    $("#TituloAlimentoGato").prop("hidden", true);
    $("#AlimentoPerro").prop("hidden", true);
    $("#TituloAlimentoPerro").prop("hidden", true);
    $("hr").prop("hidden", true);
    $("br").prop("hidden", true);
    $(".BrEspecial").prop("hidden", false);
    $("#Cerrar").prop("hidden", false);
    $("#Resultado").prop("hidden", false);
    $("#TituloBuscar").prop("hidden", false);
    var textoBuscar = $("#TextoBuscar").val();
    var tarjeta = "";
    $.get("https://desarrollowebapi.azurewebsites.net/api/Alimento/Busqueda/" + textoBuscar, function (respuesta) {
        $("#TituloBuscar").html("Resultados de la Búsqueda");
        respuesta.forEach(item => {
            $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
                $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
                    tarjeta +=
                        "<div class='col-lg-6 col-md-6 col-sm-12'>" +
                        "<div class='card' style='width: 100%;'>" +
                        "<img class='card-img-top img_style' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
                        "<div class='card-body'>" +
                        "<h5 class='card-title'>" + item.titulo_Alimento + "</h5>" +
                        "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
                        "<p class='card-text'>Precio: " + item.precio_Alimento + "</p>" +
                        `<a onclick='ComprarAlimento(${item.id})' class='Comprar btn btn-secondary'>Comprar</a>` +
                        "</div>" +
                        "</div>" +
                        "</div>";
                        $("#Resultado").html(tarjeta);
                });
            });
        });
    });
}

/*
    $("#AlimentoRoedor").prop("hidden", true);
    $("#TituloAlimentoRoedor").prop("hidden", true);
    $("#AlimentoGato").prop("hidden", true);
    $("#TituloAlimentoGato").prop("hidden", true);
    $("#AlimentoPerro").prop("hidden", true);
    $("#TituloAlimentoPerro").prop("hidden", true);
*/