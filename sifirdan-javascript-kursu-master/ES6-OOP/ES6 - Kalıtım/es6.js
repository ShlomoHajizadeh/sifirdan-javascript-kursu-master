// function Person(name,age){
//     this.name = name;
//     this.age = age;

// }
// Person.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yaş: " + this.age);
// }
// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee");
// }
// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş : " +this.salary);
// }
// const emp = new Employee("Suleiman",22,10000);

class Person { // Superclass veya BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
}
class Employee extends Person { // DerivedClass, Subclass veya ChildClass
    constructor(name,age,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary = salary;
    }
    showInfos(){// Overriding
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş : " +this.salary);
    }
    toString(){ // Overriding
        console.log("Employee");
    }
    raiseSalary(amount) { // Ekstra
        // this.salary = this.salary + amount;
        this.salary += amount;
    }
}

const emp = new Employee("Suleiman",22,10000);
const emp1 = new Employee("Aysel", 24, 8000);
emp.raiseSalary(500);
emp1.raiseSalary(420);

console.log(emp);
console.log(emp1);
emp.showInfos();
emp1.showInfos();

emp.showInfos();
emp1.showInfos();
emp.toString();
emp1.toString();