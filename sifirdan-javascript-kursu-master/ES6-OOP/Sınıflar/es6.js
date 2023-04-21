// Syntactic Sugar

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function () {
//     console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);

// }
// const emp = new Employee("Suleiman", 22, 10000);

// console.log(emp);

class Employee {

    constructor(name,age,salary){ // Constructor
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
}

const emp = new Employee("Suleiman",22,10000);
const emp1 = new Employee("Aysel", 24, 8000);

console.log(emp,emp1);
emp.showInfos();
emp1.showInfos();