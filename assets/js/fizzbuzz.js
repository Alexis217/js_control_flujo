// FizzBuzz. Generar un programa que itere del 1 al 15. Por cada iteración:

// a) si el numero es múltiplo de 3, mostrar la palabra "Fizz"
// b) si el numero es múltiplo de 5, mostrar la palabra "Buzz"
// c) si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
// d) en los demas casos mostrar solo el número

for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        alert("FizzBuzz");
    } else if (i % 3 == 0) {
        alert("Fizz");
    } else if (i % 5 == 0) {
        alert("Buzz");
    } else {
        alert(i);
    }
}