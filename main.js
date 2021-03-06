let btnLogin = document.getElementById("btn-login");
let seccionLogin = document.getElementById("seccionLogin");
let seccionPrincipal = document.getElementById("seccionPrincipal");
let formulario = document.getElementById("formulario");
let mensajeError = document.getElementById("mensaje-error");
let seccionSaldo = document.getElementById("seccionSaldo");
let seccionIngresar = document.getElementById("seccionIngresar");
let alertaNuevoSaldo = document.getElementById("alertaNuevoSaldo");
let seccionRetirar = document.getElementById ("seccionRetirar");
let alertaRetiro = document.getElementById ("alertaRetiro");


seccionPrincipal.hidden = true;
seccionSaldo.hidden =  true;
seccionIngresar.hidden = true;
seccionRetirar.hidden = true;
alertaNuevoSaldo.hidden = true;


var usuarios = [
    {
        name: "oliver",
        usuario: "oliver@gmail.com",
        password: "123",
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

let usuarioActual;
function login() {

let flagAlert = true;

const correo = formulario.email.value;
const password = formulario.password.value;

if (correo.length <= 0 || password <= 0){
    mensajeError.innerText= "No has ingresado tu Usuario y/o Contraseña";
    return;
}

for (let i = 0; i < usuarios.length; i++) {
    let tmpUsuario = usuarios[i];
    //Esta es la validacion para ver si si existe el usuario
    if (
    correo.toLowerCase() === tmpUsuario.usuario.toLowerCase() &&
    password === tmpUsuario.password
    ) {
    flagAlert = false;
    
      //Oculto la sección de login (el formulario)
    seccionLogin.hidden = true;
      //Muestro la sección principal (los botones)
    seccionPrincipal.hidden = false;
    usuarioActual = tmpUsuario;
    console.log(usuarioActual);
    document.getElementById("username").innerText=usuarioActual.name.toUpperCase();
    break;
    }else {
        mensajeError.innerText="Usuario y/o Contraseña son incorrectos"
    }
}
}

function consultarSaldo() {
    seccionSaldo.hidden = false;
    seccionIngresar.hidden = true;
    seccionRetirar.hidden = true;
    seccionSaldo.innerText = "El saldo actual de tu cuenta es: " + usuarioActual.saldo;
}

function ingresarMonto() {
    seccionIngresar.hidden = false;
    seccionSaldo.hidden = true;
    seccionRetirar.hidden = true;
    
    
}


function depositar() {
    let deposito1 = parseInt(seccionIngresar.deposito.value);
    let nuevoSaldo = (usuarioActual.saldo+deposito1);

    seccionSaldo.hidden = true;
    alertaNuevoSaldo.hidden = false;

    alertaNuevoSaldo.innerText = "Ingresaste: " + deposito1 + "  Tu nuevo saldo es: " + nuevoSaldo;

    // Para modificar el saldo en el arreglo??? --> usuarioActual.splice(3,1, nuevoSaldo);
}


function retirarMonto () {
    seccionRetirar.hidden = false;
    seccionSaldo.hidden = true;
    seccionIngresar.hidden = true;
    alertaRetiro.hidden = true;

}


function retirar() {
    let retiro = parseInt(seccionRetirar.retiro.value);
    let nuevoSaldo = (usuarioActual.saldo-retiro);

    alertaRetiro.hidden = false;
    if(retiro <= usuarioActual.saldo){
        alertaRetiro.innerText = "Retiraste: " + retiro + " Tu nuevo saldo es: " + nuevoSaldo;
    }else {
        alertaRetiro.innerText = "No tienes suficiente saldo para retirar";
    }

}

