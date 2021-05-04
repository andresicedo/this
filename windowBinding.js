/*
Window Binding: if Implicit, Explicit or New Binding are not present, "this" 
will point to the window object.
*/

let sayName = function () {
    console.log(this.name);
    console.log(this.age);
};

let andres = {
    name: "Andres",
    age: 21
};

sayName();//undefined

// *** Not a best practice to assign key/values to window object
window.name = "Andres";
window.age = 21;
sayName();
//this === window
//"Andres"
//21