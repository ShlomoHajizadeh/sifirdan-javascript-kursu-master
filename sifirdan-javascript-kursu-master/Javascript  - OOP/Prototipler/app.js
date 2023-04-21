function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("Isim: " + this.name + "Yas: " + this.age);
    }
}
Employee.prototype.showInfos = function () {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}

const emp1 = new Employee("Suleiman", 25);
const emp2 = new Employee("Aysel", 25);

emp1.showInfos();
emp2.showInfos();

console.log(emp1);
console.log(emp2);