let value;

// Veritiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () { console.log() });
value = String([1, 2, 3, 4]);


value = (10).toString();
value = (3.14).toString();

// Veritiplerini Sayılara Çevirme
value = Number("123");
value = Number(null);
value = Number(undefined);
value = Number("Hello World");
value = Number(function () { console.log() });
value = Number([1, 2, 3, 4]);

value = Number("3.14");
value = parseFloat("3.14");

value = parseInt("3");



const a = Number("34") + 53;

console.log(a);
console.log(typeof a);

console.log(value);
console.log(typeof value);

// PRIME NUMBERS FROM 1 TO 100
// 1'DEN 100'E ASAL SAYILAR
let i, j, isPrime, sqrt;

for (i = 2; i <= 100; i++) {
    isPrime = true;
    sqrt = Math.sqrt(i);

    for (j = 2; j <= sqrt; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.write(i + "<br>");
    }
}