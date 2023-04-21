// Karşılaştırma Operatörleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// console.log(2 == 2); true
// console.log("js" == "java"); false

// console.log(2 == "2"); true
// console.log(2 === "2"); false 

// console.log(4 > 2); true
// console.log(2 > 4); false

// console.log(2 != 2); false
// console.log(2 != 4); true

// console.log(2 < 4); true
// console.log(4 < 2); false

// console.log(2 >= 4); false
// console.log(2 <= 4); true

// console.log(4 <= 2); false
// console.log(4 >= 2); true

// Mantıksal Bağlaçlar

// Not Operatörü: !

// console.log(!(2 != 2)); true

// And Operatörü: &&

// console.log( (2 == 2) && ("Ahmet" == "Ahmet")); true
// console.log( (4 == 2) && ("Ahmet" == "Ahmet")); false

// Or Operatörü: ||

// console.log((4 == 2) || ("Ahmet" == "Ahmet") ); false true
// console.log((4 == 2) || ("Ahmet" != "Ahmet") ); false false

// const error = false;

// if (error == true){
//     console.log("Hata oluştu");
// }
// else {
//     console.log("Hata oluşmadı");
// }

// const user = "ttt"; or
// const user = "mmc";

// if(user === "mmc") {
//     console.log("Kullanici Bulundu");
// }
// else {
//     console.log("Kullanici Bulunmadi...");
// }

// const process = "10";

// if (process === "1"){
//     console.log("İşlem 1");
// }
// else if (process === "2"){
//     console.log("İşlem 2");
// }
// else if (process === "3"){
//     console.log("İşlem 3");
// }
// else if (process === "4"){
//     console.log("İşlem 4");
// }
// else {
//     console.log("Geçersiz İşlem");
// }

const number = 120;

// if (number === 100) {
//     console.log("Sayı 100'e eşit");
// }
// else {
//     console.log("Sayı 100'e Eşit Değil");
// }

// Ternary Operator

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 Değil");
// ?-if :-else

// if (number === 100) console.log("Sayı 100");
// else console.log("Sayı 100 değil");