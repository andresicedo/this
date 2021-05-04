/*
New Binding: "new" keyword, when used, has javascript create a brand new object. 
"this" keyword inside the function is bound to the new object being constructed.
*/
let Animal  = function (color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
};

let lion = new Animal("tan", "Simba", "Lion");
console.log(lion);
//Animal { color: 'tan', name: 'Simba', type: 'Lion' }

let dog = new Animal("brown", "Rambo", "Dog");
console.log(dog);
//Animal { color: 'brown', name: 'Rambo', type: 'Dog' }