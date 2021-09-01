let btnLogin = document.getElementById("btn-login");
let seccionLogin = document.getElementById("seccionLogin");
let seccionPrincipal = document.getElementById("seccionPrincipal");

seccionPrincipal.hidden = true;

var usuarios = [
    {
        name: "oliver",
        usuario: "oliver@gmail.com",
        password: "12345",
        saldo: 500,   
    },

    {
        name: "juana",
        usuario: "juana@gmail.com",
        password: "holahola",
        saldo: 400,  
    },

    {
        name: "pedro",
        usuario: "pedro@gmail.com",
        password: "hola123",
        saldo: 700, 
    }
]

function login() {
    var usuario = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;

    if(usuario == usuarios[usuario] && password == usuarios[password]){
        alert("Usuario y Password correctos");
    }else{
        alert("Verifique sus datos");
    }
  }

  login();