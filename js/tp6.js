const numero1 = parseInt(prompt("Ingrese Primer numero:"));
const numero2 = parseInt(prompt("Ingrese Segundo numero:"));
if (numero1 < numero2){
    document.write("El segundo numero (Numero2) es mayor")
}
else if(numero2< numero1){
    document.write("El primero numero (Numero1) es mayor")
}
else{
    document.write("Los numeros tienen el mismo valor")
}