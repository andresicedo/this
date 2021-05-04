# This

> This repository gives an explanation of the keyword "this" and the ways it is implemented within Javascript.

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

What do we know about "this"?
"This" allows us to reuse functions with different context or in other words, 
allows us to decide which objects should be focal when calling a function or 
a method.

First question to ask when trying to identify "this".
"Where is the function being called?" 
In order to know what "this" is referencing, you have to know where the 
function is being called.

There are four ways we can use "this".
Implicit Binding, Explicit Binding, New Binding and Window Binding

Implicit Binding: This is the most common occurrence of "this". When you call 
a function, look to the left of the "." and that is what the "this" keyword is 
referencing. Summary: When this is being used, find where the function is 
being called, look the left of the "." and "this" will be referencing that object.

Explicit Binding: Explicitly stating what "this" is. We can do this using 
three methods: call, apply and bind.

New Binding: "new" keyword, when used, has javascript create a brand new object. 
"this" keyword inside the function is bound to the new object being constructed.

Window Binding: if Implicit, Explicit or New Binding are not present, "this" 
will point to the window object.


### Technologies

- Javascript

[Back To The Top](#This)

---

## How To Use

- Each JS file in the repository gives a few examples of how "this" is used and 
how to know what "this" is referencing for each circumstance.


## References

[Understanding the "this" keyword, call, apply, and bind in JavaScript](https://youtu.be/zE9iro4r918)

## License

* [MIT](https://opensource.org/licenses/MIT)

[Back To The Top](#This)

## Author Info

- Website - [AndresIcedo.com](https://AndresIcedo.com/)
- LinkedIn - [andres-icedo](https://www.linkedin.com/in/andres-icedo/)
- GitHub - [andresicedo](https://github.com/andresicedo)


[Back To The Top](#This)
