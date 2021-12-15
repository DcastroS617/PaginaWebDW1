function Login() {
  const uri = "https://desarrollowebapi.azurewebsites.net/api/Usuario/Login";
  let tel = document.getElementById('Telefono').value;
  let con = document.getElementById('Contrasena').value;
  let item = {
    telefono: tel,
    contrasena: con
  };
  fetch(uri, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(respuesta => {
      if (respuesta.status === 204) {
        $.get("https://desarrollowebapi.azurewebsites.net/api/Usuario/Get/" + tel, function (usuario) {
          console.log(usuario.result);
          localStorage.setItem("Login", "true");
          localStorage.setItem("IdUsuario", usuario.result.id);
          window.location = "MenuPrincipal.html";
        });
      } else {
        alert('No se pudo autenticar el usuario.');
        localStorage.setItem("Login", "false");
      }
    })
    .then(() => { tel.value = ""; con.value = "" })
    .catch(error => console.error("No se pudo realizar la accion", error));
}

function AbrirRegistrar() {
  $("#RegistrarForm").fadeIn().prop("hidden", false);
  $("a").prop("hidden", true);
}

function CerrarRegistrar() {
  $("a").prop("hidden", false);
  $("#RegistrarForm").slideUp();
}

function AbrirContrasena() {
  $("#FormContrasena").fadeIn().prop("hidden", false);
}

function CerrarContrasena(){
  $("#FormContrasena").slideUp().prop("hidden", true);
  $("#InputContrasena").slideUp().prop("hidden", true);
}

function VerificarTelefono() {
  let telefono = $("#TelefonoContrasena").val();
  $.get("https://desarrollowebapi.azurewebsites.net/api/Usuario/Get/" + telefono, function (respuesta) {
      //console.log(respuesta.isCompletedSuccessfully);
      if (respuesta.isCompletedSuccessfully === true) {
          $("#InputContrasena").fadeIn().prop("hidden", false);
          $("#ContrasenaVerificada").val(respuesta.result.contrasena);
      } else {
          alert("no se encuentra registrado en nuestros usuarios");
      }
  });
}

function ShowPassword() {
  let contrasena = document.getElementById("ContrasenaVerificada");
  if (contrasena.type === "password") {
      contrasena.type = "text";
  } else {
      contrasena.type = "password";
  }
}

function GuardarCliente() {
  const url = "https://desarrollowebapi.azurewebsites.net/api/Usuario/";
  let nombre = $("#NombreUsuario").val();
  let apellido = $("#ApellidoUsuario").val();
  let contrasena = $("#ContrasenaUsuario").val();
  let telefono = $("#TelefonoUsuario").val();
  let correo = $("#CorreoUsuario").val();
  let direccion = $("#DireccionUsuario").val();

  const item = {
      nombre: nombre,
      apellido: apellido,
      contrasena: contrasena,
      telefono: telefono,
      correo: correo,
      direccion: direccion
  };

  fetch(url, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
  })
      .then(respuesta => respuesta.json())
      .then(() => {
          alert("Usuario Registrado!");
          CerrarRegistrar();
      })
      .catch(error => console.error("no se pudo registrar el usuario", error));
}
