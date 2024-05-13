//Hacer un programa que itere por los numeros del 0 al 10 y por cada uno de ellos que imprima y nos diga si el numero es par o impar.

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        alert("El numero " + i + " es par");
    } else {
        alert("El numero " + i + " es impar");
    }
}