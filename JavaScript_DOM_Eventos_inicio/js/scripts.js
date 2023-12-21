

// ---------------------- SELECTORES ----------------------

// querySelector
const heading = document.querySelector('.header__texto h2'); // 0 o 1 elemento. El primero que cumple la condición
// const heading = document.querySelector('#heading');
heading.textContent = 'Nuevo heading';
heading.classList.add('nueva-clase');

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // Todos los elementos que concuerden con el selector

// enlaces[0] Primer elemento, se toman como los arrays

enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].href = 'https://www.google.com';
// enlaces[0].classList.add('clase-nueva');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById

const heading2 = document.getElementById('heading');

// ---------------------- NUEVOS ELEMENTOS HTML ----------------------

// Generar nuevo enlace -> href, texto y clase -> Añadir al documento
const nuevoEnlace = document.createElement('A'); // Mejor en mayúsculas
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Un nuevo enlace';
nuevoEnlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// ---------------------- EVENTOS WINDOW/DOCUMENT ----------------------

/* // load espera a que el JS y los archivos que dependen del HTML estén listos
// Sintaxis 1
window.addEventListener('load', function(){
    console.log(4);
}) 

// Sintaxis 2
window.onload = function(){
    console.log(1);
} 

// Solo espera por el HTML, pero no espera por el CSS o imágenes
document.addEventListener('DOMContentLoaded', function(){
    console.log(8);
}) 

// Cuando se hace scroll
window.onscroll = function(){
    console.log('scrolling...');
} */



// ---------------------- EVENTOS DE TECLADO Y RATÓN ----------------------

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('change', function(){
    console.log('Escribiendo...');
}) // Recibe cuando se comienza a escribir

nombre.addEventListener('input', leerTexto); // Recibe en tiempo real lo que se va escribiendo

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

// Evento de Submit. Al formulario se le asigna un evento submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    // Validar el formulario

    const {nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    // Creamos la alerta de Envío correcto
    mostrarAlerta('Mensaje enviado correctamente');

    console.log(nombre);
    console.log(email);
    console.log(mensaje);


    console.log('Enviando formulario');
})

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(e.target)
    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){ // Parámetro por default error = null
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    // Desaparece después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


// Seleccionar elementos y asociarles un evento. Al boton se le asigna un evento click

/* const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();

    // Validar un formulario

    console.log('Enviando formulario.');
});  */



