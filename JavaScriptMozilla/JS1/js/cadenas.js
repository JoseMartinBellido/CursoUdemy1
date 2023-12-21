

let cadena = 'auginriNUWEweio';
console.log(cadena);

// indexOf devuelve el número del primer elemento que coincide (entre 0 y length-1 si existe en la cadena, -1 si no existe)
let indiceExistente = cadena.indexOf('inri');
let indiceInexistente = cadena.indexOf('asdfg');

console.log(`El índice del primer elemento que concide con \'inri\' es ${indiceExistente}, mientras que para \'asdfg\' es ${indiceInexistente}`);


let subcadena = cadena.slice(0,3);
let subcadena2 = cadena.substring(0,3);

// Funcionan de la misma forma ya que slice es para arrays, substring es para cadenas, pero un string es un tipo específico de array
console.log(`Haciendo la subcadena con slice: ${subcadena}. Haciendo la subcadena con substring: ${subcadena2}`);

// Conversión a mayúsculas y minúsculas
let minuscula = cadena.toLowerCase();
let mayuscula = cadena.toUpperCase();

console.log(`Cadena en minúscula: ${minuscula}. Cadena en mayúscula: ${mayuscula}`);

// Intentar reemplazar una cadena que no existe no realiza ninguna acción sobre la cadena
let reemplazada = cadena.replace('aug','reemplazo');
let reemplazadaNoExistente = cadena.replace('asdfg','reemplazo');

console.log(`La cadena reemplazada es: ${reemplazada}. La cadena que intenta reemplazar una cadena no existente es: ${reemplazadaNoExistente}`);

