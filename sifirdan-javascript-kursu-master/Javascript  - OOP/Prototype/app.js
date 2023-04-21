// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name = "Suleiman";
// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("Bilgiler Gosteriliyor...");
    }
    this.toString = function() {
        console.log("Bu bir Employee objesi");
    }
}
const emp1 = new Employee("Suleiman", 22);
console.log(emp1);

console.log(emp1.toString());