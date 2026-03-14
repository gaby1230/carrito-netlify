function agregarCarrito(nombre,precio){

let carrito=JSON.parse(localStorage.getItem("carrito")) || []

carrito.push({nombre,precio})

localStorage.setItem("carrito",JSON.stringify(carrito))

actualizarContador()

}

function actualizarContador(){

let carrito=JSON.parse(localStorage.getItem("carrito")) || []

let contador=document.getElementById("contador")

if(contador){

contador.textContent=carrito.length

}

}

function mostrarCarrito(){

let carrito=JSON.parse(localStorage.getItem("carrito")) || []

let lista=document.getElementById("lista")

lista.innerHTML=""

let total=0

carrito.forEach((curso,index)=>{

let li=document.createElement("li")

li.innerHTML=`
${curso.nombre} - $${curso.precio}
<button onclick="eliminar(${index})">Eliminar</button>
`

lista.appendChild(li)

total+=curso.precio

})

document.getElementById("total").textContent="Total: $"+total

}

function eliminar(index){

let carrito=JSON.parse(localStorage.getItem("carrito"))

carrito.splice(index,1)

localStorage.setItem("carrito",JSON.stringify(carrito))

mostrarCarrito()

}

function pagar(){

let div=document.getElementById("animacionPago")

div.innerHTML="💳 Procesando pago..."

setTimeout(()=>{

div.innerHTML="✅ Compra realizada"

localStorage.removeItem("carrito")

},2000)

}

window.onload=actualizarContador
