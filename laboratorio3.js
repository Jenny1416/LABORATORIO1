// Paso 1
let num1 = 10;
let num2 = 5;
let operacion = "suma";

// Paso 2
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: División por cero";
        }
    } else {
        return "Error: Operación no válida";
    }
}

// Paso 4
while (true) {

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operacion === "salir") {
        console.log("¡Hasta luego!");
        break;
    }

    let resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la operación ${operacion} es: ${resultado}`);
}
