/*
Explicit Binding: Explicitly stating what "this" is. We can do this using 
three methods: call, apply and bind.
*/

// //explicit ex:
// let sayName = function() {
//     console.log(this.name);
// };
// let andres = {
//     name: 'Andres',
//     age: 21
// };
// sayName.call(andres);//'Andres'  this === andres


// //Call method: ex:
// let sayName = function(lang1, lang2, lang3) {
//     console.log(`${this.name} knows ${lang1}, ${lang2} and ${lang3}`);
// };

// let andres = {
//     name: 'Andres',
//     age: 21
// };

// let languages = ['Javascript', 'Python', 'Ruby'];

// sayName.call(andres, languages[0], languages[1], languages[2]);
// //this === andres
// //'Andres know Javascript, Python and Ruby'
// //.call(thisArg, list of arguments)
// //thisArg is the first argument in the call method, to replace the current object


// //Apply method: ex:
// let sayName = function(lang1, lang2, lang3) {
//     console.log(`${this.name} knows ${lang1}, ${lang2} and ${lang3}`);
// };

// let andres = {
//     name: 'Andres',
//     age: 21
// };

// let languages = ['Javascript', 'Python', 'Ruby'];

// sayName.apply(andres, languages);
// //this === andres
// //'Andres knows Javascript, Python and Ruby'
// //.apply(thisArg, arguments array var)
// //thisArg is the first argument in the apply method, to replace the current object


//Bind method: ex: 
//similar to call method, except it creates a new function and binds "this" to the 
//first argument
let sayName = function(lang1, lang2, lang3) {
    console.log(`${this.name} knows ${lang1}, ${lang2} and ${lang3}`);
}

let andres = {
    name: 'Andres',
    age: 21
}

let languages = ["Javascript", "Python", "Ruby"];
let bindMethod = sayName.bind(andres, languages[0], languages[1], languages[2]);
bindMethod();
//this === andres
//"Andres know Javascript, Python and Ruby"
//.bind(thisArg, list of arguments)
//thisArg is the first argument in the bind method, to replace the current object