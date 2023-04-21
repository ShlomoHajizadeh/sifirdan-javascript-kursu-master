// console.log(this); // Global Scope
// const emp1 = { // Object Literal
//     name:"Mustafa",
//     age:25,
//     showInfos:function() {console.log("Bilgiler Gösteriliyor");}
// };
// const emp2 = {
//     name:"Ahmet",
//     age:25
// }
// emp1.salary = 4000;
// emp1.showInfos();
// console.log(emp1);

function Employee(name,age,salary){ // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age =age;
    this.salary = salary;
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}
const emp1 = new Employee("Suleiman",25,8000);
const emp2 = new Employee("Aysel",28,5000);
const emp3 = new Employee("Davud", 3, 1000);
const emp4 = new Employee("Maryam",1,500);

emp1.showInfos();
emp2.showInfos();
emp3.showInfos();
emp4.showInfos();
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);