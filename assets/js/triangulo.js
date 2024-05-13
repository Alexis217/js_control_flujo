//Triangulo de #. Para este ejercicio, construir un programa que permita armar un triangulo de #de la siguiente manera:
// #
// ##
// ###
// ####
// #####


for (let i = 1; i <= 7; i++) {
    let espacios = "";
    let simbolos = "";
    for (let j = 1; j <= 7 - i; j++) {
        espacios += " ";
    }
    for (let k = 1; k <= i; k++) {
        simbolos += "#";
    }
    for (let l = 1; l <= i; l++) {
        simbolos += "#";
    }
    console.log(espacios + simbolos);
}