const numero = parseInt(prompt("Introduce un número:"));
let divisiblePor = "";
if (numero % 2 === 0) {
    divisiblePor = "2";
} else if (numero % 3 === 0) {
    divisiblePor = "3";
} else if (numero % 5 === 0) {
    divisiblePor = "5";
} else if (numero % 7 === 0) {
    divisiblePor = "7";
}
if (divisiblePor !== "") {
    console.log(`El ${numero} es divisible por ${divisiblePor}.`);
} else {
    console.log(`El ${numero} no es divisible por ninguno de los números 2, 3, 5 o 7.`);
}