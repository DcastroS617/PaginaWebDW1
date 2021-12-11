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
        window.location = "MenuPrincipal.html";
        $.get("https://desarrollowebapi.azurewebsites.net/api/Usuario/Get/"+ tel, function(usuario){
          console.log(usuario.result);
          localStorage.setItem("Login", "true");
          localStorage.setItem("IdUsuario", usuario.result.id);
        });
        
      } else {
        alert('No se pudo autenticar el usuario.');
        localStorage.setItem("Login", "false");
      }
    })
    .then(() => { tel = ""; con = "" })
    .catch(error => console.error("No se pudo realizar la accion", error));
}

