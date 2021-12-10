$(document).ready(function(){
    $(".Comprar").click(function(){
        var login = localStorage.getItem("Login");
        if(login === "true"){
            alert("Si estas logueado");
        } else { 
            alert("Debes iniciar sesión para realizar la compra!");
        }
    });
});