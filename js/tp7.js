const numero1 = parseInt(prompt("Ingrese Primer numero:"));
const numero2 = parseInt(prompt("Ingrese Segundo numero:"));
const numero3 = parseInt(prompt("Ingrese Tercer numero:"));
if (numero1 > numero2 && numero1 > numero3){
    document.write("El primer numero (Numero1) es el mayor " + numero1)
}
else if(numero2> numero1 && numero2 > numero3){
    document.write("El segundo numero (Numero2) es mayor " + numero2)
}
else if (numero3 > numero1 && numero3 > numero2){
    document.write("El tercer numero es el mayor " + numero3)
}
else{
    document.write("Todos los numeros son iguales")
}