let frase = prompt("Ingrese una palabra: ");
let vocales = "";

for(let i = 0; i < frase.length; i++){
    if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){
        vocales = vocales + frase[i];
    }
}

document.write("El resultado es: " + vocales);