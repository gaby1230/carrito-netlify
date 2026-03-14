function registrar(){

let nombre=document.getElementById("nombre").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value

let usuario={nombre,email,password}

localStorage.setItem("usuario",JSON.stringify(usuario))

alert("Usuario registrado")

window.location="login.html"

}

function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

let usuario=JSON.parse(localStorage.getItem("usuario"))

if(email==usuario.email && password==usuario.password){

alert("Bienvenido")

window.location="index.html"

}else{

alert("Datos incorrectos")

}

}
