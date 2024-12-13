/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.*/ 


// se le solicita al usuario un número al usuario con mi prompt() que siempre va a recibir un string y se convierte a un número entero con mi método parseInt
let numero;
do {
    numero = prompt("Por favor, ingresa un número entero:");
    numero = parseInt(numero); 
} while (isNaN(numero)); // Si no es un número, lo compruebo con mi método isNaN(), se pide de nuevo la entrada hasta que sea válido 

// el factorial de un número "n" va a ser el prodcuto (resultado de la multiplicación) de los enteros positivos desde "n" hasta 1.
// cuando n es igual a 0 y a 1 el resultado siempre será 1 por lo que mi operador || me permite determinar si mis dos condiciones se cumplen
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * calcularFactorial(n - 1); 
}
// por ultimo me aseguro con mi recursividad de que la formula se ejecute hasta multiplicar todos los números, para esto se debe de restar 1 para asegurar de que el número cambie en cada iteración, es decir que avance por los números más pequeños hasta llegar a mi condición base para que no crear un bucle infinito, es decir si 1 es igual a 0 o 1

// creo una nueva constante llamada resultado en donde voy a utilizar la función (16) con mi número ingresado (9)
const resultado = calcularFactorial(numero);

// se imprime el resultado, entonces uso template literal en vez de concatenar las respuestas con mi operador +
//console.log('El factorial de ' + numero + ' es: ' + resultado);
console.log(`El factorial de ${numero} es: ${resultado}`);


/*
prompt() permite solicitar al usuario un valor de entrada: 
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

el valor ingresado por el usuario se convierte en un número entero usando parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

verifico si el valor no es un número con isNaN() 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

para calcular el factorial de un número "n", uso recursión, la recursión permite que una función se llame a sí misma con valores más pequeños de n, hasta llegar a la condición base (n === 0 || n === 1), que termina mi proceso
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion

Mi operador lógico || se usa para comprobar si n es 0 o 1 y que sirve de condición base para la recursión.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

el resultado final se muestra en consola usando console.log() y el uso de template literals con ${} para insertar el valor de la variable dentro de la cadena de texto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/console/log

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/