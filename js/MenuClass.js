
$(document).ready(function () {
  TarjetaAlimentoDisplay();
  TarjetaArticuloDisplay();
});



//LOS CARDS DEL MENU PRINCIPAL
//ESTA SERIA LA DE ALIMENTOS DISPONIBLES
function TarjetaAlimentoDisplay() {
  var tarjetaAlimento = "";
  $.get("https://desarrollowebapi.azurewebsites.net/api/Alimento/", function (respuesta) {
    console.log(respuesta);
    $("#TituloAlimento").html("Alimentos de Animales");
    respuesta.forEach(item => {
      $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
        $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
          tarjetaAlimento +=
            "<div class='col-sm-10 col-lg-6'>" +
            "<div class='card' style='width: 34rem;'>" +
            "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.tipo_Alimento + "'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + item.titulo_Alimento + "</h5>" +
            "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
            "<p class='card-text'>Precio: " + item.precio_Alimento + "</p>" +
            `<a onclick='ComprarAlimento(${item.id})' class='Comprar btn btn-outline-dark'>Comprar</a>` +
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
  $.get("https://desarrollowebapi.azurewebsites.net/api/Articulo", function (respuesta) {
    console.log(respuesta);
    $("#TituloArticulo").html("Articulos a la venta");
    respuesta.forEach(item => {
      $.get("https://desarrollowebapi.azurewebsites.net/api/Proveedor/" + item.proveedorId, function (proveedor) {
        $.get("https://desarrollowebapi.azurewebsites.net/api/Archivo/" + item.archivoId, function (imagen) {
        tarjetaArticulo +=
          "<div class='col-sm-10 col-lg-6'>" +
          "<div class='card' style='width: 34rem;'>" +
          "<img class='card-img-top' src='" + imagen.ubicacion + "' alt='" + item.nombre_Articulo + "'>" +
          "<div class='card-body'>" +
          "<h5 class='card-title'>Tipo: " + item.nombre_Articulo + "</h5>" +
          "<p class='card-subtitle'>Proveedor: " + proveedor.nombre + "</p>" +
          "<p class='card-text'>Precio: " + item.precio_Articulo + "</p>" +
          `<a onclick='ComprarAlimento(${item.id})' class='Comprar btn btn-outline-dark'>Comprar</a>` +
          "</div>" +
          "</div>" +
          "</div>";
        $("#Articulo").html(tarjetaArticulo);
    });
      });
    });
  });
}