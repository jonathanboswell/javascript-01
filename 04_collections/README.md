<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)
Arrays & Objects

---

<!-- .slide: data-background="../images/background.jpg"-->
### Schedule:
* Review
* Scope
* Arrays
* Objects (baby objects that grow up way too fast!)
* Homework

---

<!-- .slide: data-background="../images/background.jpg"-->
## Introduction to Scope

Scope is the set of variables you have access to. 

- JavaScript reads from top to bottom. 

Sometimes we declare variables inside functions (just like arguments), which aren't accessible in other parts of our code. 

This is the concept of scope.

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Global Scope

When you declare a variable right away, it's defined globally:

```javascript
var name = 'Gerry';
```

---

<!-- .slide: data-background="../images/background.jpg"-->
#### What is a "namespace clash"? 
* It's the worst thing ever.
* Scope matters
* Understanding scope
* Limit global variables

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Local Scope

* If a variable is declared **inside** a function, it is referred to as LOCAL, and has a local scope.
* A variable with local scope cannot be referenced outside of that function.

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Local and Global Scope Usage

```javascript
var a = "this is the global scope";
function myFunction() {
  var b = "this variable is defined in the local scope";
}
myFunction();
console.log(b);
```

In this case, the console log will send a reference error because the variable `b` is not accessible outside the scope of the function in which it is defined.

---

<!-- .slide: data-background="../images/background.jpg"-->
### Scope flows down:

A function can access variables of the parent scope. 

A **function defined in the global scope** can **access all variables** defined in the **global** scope.

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
    return a + " " + name;
}

sayHello("JavaScript");
=> "Hello JavaScript";
```

---

<!-- .slide: data-background="../images/background.jpg"-->
### Nested Function Scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
var a = 1;

function getScore () {
  var b = 2,
  c = 3;

  function add() {
    return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

---

<!-- .slide: data-background="../images/background.jpg"-->
### Let's play with some scope!

---

<!-- .slide: data-background="../images/background.jpg"-->
### Arrays
https://prezi.com/acbdpvkjephx/arrays/

---

<!-- .slide: data-background="../images/background.jpg"-->
### Objects
Congratulations! You have a new baby object!
