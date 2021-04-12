


// CICLO FOR DA 1 A 100
for (var i = 1; i < 101; i++) {
 // DUE VARIABILI PER SEMPLIFICARE
    var uno = -i % 3 === 0;
    var due = i % 5 === 0;


// SE I NUMERI SONO MULTIPLI SIA DI DI TRE CHE DI CINQUE
    if (uno & due) {
        console.log("FizzBuzz");
// SE SONO MULTIPLI DI 3
    } else if (uno) {
        console.log("Fizz");
// SE SONO MULTIPLI DI 5
    } else if (due) {
        console.log("Buzz");
// TUTTI I NUMERI DA UNO A CENTO
    } else {
        console.log(i);
    }
}








