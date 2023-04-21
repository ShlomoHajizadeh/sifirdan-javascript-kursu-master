// const obj = {
//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
// console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Suleiman";
// emp.age = 22;
// console.log(emp);

function Person() {

}
Person.prototype.test1 = function () {
    console.log("Test 1");
}
Person.prototype.test2 = function () {
    console.log("Test 2");
}
Person.prototype.test3 = function () {
    console.log("Test 3");
}
Person.prototype.test4 = function () {
    console.log("Test 4");
}
Person.prototype.test5 = function () {
    console.log("Test 5");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function () {
    console.log("MyTest");
}
const emp = new Employee("Suleiman", 22);

console.log(emp);

emp.test1();
emp.test2();
emp.test3();
emp.test4();
emp.test5();