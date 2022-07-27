
//con esta función se previene que el formulario se intente enviar cada vez que se hace click en botón de sumtit//
//se utilizan const porque el valor de la variable no va a cambiar//

const formulario = document.querySelector("#formulario")
function preventSubmit(event) {
    event.preventDefault();
}
formulario.addEventListener('submit', preventSubmit);


//meter en variables los elementos de HTML en los que se necesita meter alguna funcionalidad Javascript//
const valoracion = document.querySelector("#valoracion")
console.log("valor de la valoracion: ", valoracion.value);

const valoracionBoton = document.querySelector("#mostrar-valoracion");
console.log(valoracionBoton);

const mostrarValoracion = document.querySelector(".mostrar-valoracion");
valoracionBoton.addEventListener("click", function () { mostrarValoracion.innerHTML = "Has valorado con " + valoracion.value + " puntos"; modalValoracion.classList.remove("ocultar-valoracion") });


const cuenta = document.querySelector("#cuenta")
console.log("cuenta: ", cuenta.value);

const cuentaBoton = document.querySelector("#mostrar-cuenta");
console.log(cuentaBoton);

const mostrarCuenta = document.querySelector(".mostrar-cuenta");
cuentaBoton.addEventListener("click", function () { mostrarCuenta.innerHTML = "Le informamos que su cuenta bancaria es: " + cuenta.value; modalCuenta.classList.remove("ocultar-cuenta") });



const fecha = document.querySelector("#dia")
let dia = new Date(fecha.value);
console.log("fecha: ", fecha);

const diaBoton = document.querySelector("#mostrar-dia");
console.log(diaBoton);

const mostrarDia = document.querySelector(".mostrar-dia");
diaBoton.addEventListener("click", function () { mostrarDia.innerHTML = "Día de la semana: " + new Date(fecha.value).getDay(); modalDia.classList.remove("ocultar-dia") });


const modalValoracion = document.querySelector(".modalvaloracion")
const botonValoracion = document.querySelector("#boton-valoracion")
botonValoracion.addEventListener("click", function () { modalValoracion.classList.add("ocultar-valoracion") })


//para revisar//

const modalCuenta = document.querySelector(".modalcuenta")
const botonCuenta = document.querySelector("#boton-cuenta")
botonCuenta.addEventListener("click", function () { modalCuenta.classList.add("ocultar-cuenta") })


const modalDia = document.querySelector(".modaldia")
const botonDia = document.querySelector("#boton-dia")
botonDia.addEventListener("click", function () { modalDia.classList.add("ocultar-dia") })