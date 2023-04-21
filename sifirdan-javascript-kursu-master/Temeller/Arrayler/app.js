let value;

const numbers = [43, 56, 33, 23, 44, 35, 5];

// const numbers2 = new Array(1,2,3,4,5,6,7);
const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

// Uzunluk
value = numbers.length;
// Indekslenme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

// Herhangi bir indeksteki değeri değiştirme
numbers[2] = 1000;

value = numbers;

// Index Of
value = numbers.indexOf(1000);

// Arrayin Sonuna Değer Ekleme - Push
numbers.push(2000);

value = numbers;

// Başına Ekleme
numbers.unshift(3000);

value = numbers;

// Sonundan Değer Atma
numbers.pop()

value = numbers;
// Başından Değer Atm
numbers.shift()

value = numbers;

// Belli bir kısmını atma
numbers.splice(0, 3);

value = numbers;

// Reverse
numbers.reverse();

value = numbers;

// İlk karakterlere göre sıralıyor mesela 12, 65, 59, 48, 23, 37 böyle olucak: 12,23,37,48,59,65
value = numbers.sort();

value = numbers;

// Fonksiyonla ilk karakterlere göre küçükten büyüğe veya büyükten küçüğe sıralama işlemi yapıyoruz.

value = numbers.sort(function (x, y) { // Küçükten Büyüğe
    return x - y;
});

value = numbers.sort(function (x, y) { // Büyükten Küçüğe
    return y - x;
});

console.log(value);
