
$(document).ready(function () {
  TarjetaAlimentoDisplay();
  TarjetaArticuloDisplay();
});



//LOS CARDS DEL MENU PRINCIPAL
//ESTA SERIA LA DE ALIMENTOS DISPONIBLES
function TarjetaAlimentoDisplay() {
  var tarjetaAlimento = "";
  $.get("https://localhost:44384/api/Alimento/", function (respuesta) {
    console.log(respuesta);
    $("#TituloAlimento").html("Alimentos de Animales");
    respuesta.forEach(item => {
      $.get("https://localhost:44384/api/Proveedor/" + item.proveedorId, function (proveedor) {
        $.get("https://localhost:44384/api/Archivo/" + item.archivoId, function (imagen) {
          tarjetaAlimento +=
            "<div class='row'>" +
            "<div class='col-sm-10'>" +
            "<div class='card' style='width: 34rem;'>" +
            "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + item.titulo_Alimento + "</h5>" +
            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
            "<p class='card-text'>Precio: " + item.precio_Alimento + "</p>" +
            "<a href='#' class='btn btn-primary'>Comprar</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
          $("#Alimento").html(tarjetaAlimento);
        });
      });
    });
  });
}

//CARD DE LOS ARTICULOS DISPONIBLES
function TarjetaArticuloDisplay() {
  var tarjetaArticulo = "";
  $.get("https://localhost:44384/api/Articulo", function (respuesta) {
    console.log(respuesta);
    $("#TituloArticulo").html("Articulos a la venta");
    respuesta.forEach(item => {
      $.get("https://localhost:44384/api/Proveedor/" + item.proveedorId, function (proveedor) {
        $.get("https://localhost:44384/api/Archivo/" + item.archivoId, function (imagen) {
        tarjetaArticulo +=
          "<div class='row'>" +
          "<div class='col-sm-10'>" +
          "<div class='card' style='width: 34rem;'>" +
          "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.nombre_Articulo + "'>" +
          "<div class='card-body'>" +
          "<h5 class='card-title'>Tipo: " + item.nombre_Articulo + "</h5>" +
          "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
          "<p class='card-text'>Precio: " + item.precio_Articulo + "</p>" +
          "<a href='#' class='btn btn-primary'>Comprar</a>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
        $("#Articulo").html(tarjetaArticulo);
    });
      });
    });
  });
}