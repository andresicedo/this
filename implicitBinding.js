/*
Implicit Binding: This is the most common occurrence of "this". When you call 
a function, look a the left of the "." and that is what the "this" keyword is 
referencing. Summary: When this is being used, go to the where the function is 
being called, look the left of the "." .
*/


// // example 1:
// let me = {
//     name: 'Andres',
//     age: 21,
//     sayName: function() {
//         console.log(this.name);
//     }
// };
// me.sayName();//Andres  
// //this === me


// // example 2:
// let sayNames = function(obj) {
//     obj.sayName = function () {
//         console.log(this.name);
//     }
// };
// let me = {
//     name: 'Andres',
//     age: 21
// };
// let you = {
//     name: 'You',
//     age: 21
// };
// sayNames(me);//this === me
// sayNames(you);//this === you
// me.sayName();//'Andres'
// you.sayName();//'You'

// example 3:
let Person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function (){
            console.log(this.name);
        },
        mother: {
            name: 'Mom',
            sayName: function () {
                console.log(this.name)
            }
        }
    }
};

let andres = Person('Andres', 21);
andres.sayName();//'Andres' this === andres
andres.mother.sayName();//'Mom' this === mother

/*
When "this" is being used, go to the function that is being called and 
look to the left of the ".". That is the object "this" is referencing.s
*/