const person = {

    age: 25,

    // tellAge: function () {

    //     // this - Person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this) // Person Objemizi gösteriyor

    tellAge: () => {
    console.log(this);
     console.log(this.age); // Person Objemizi göstermiyor
    }
    // this - Window
}
person.tellAge();