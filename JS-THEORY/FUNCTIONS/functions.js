// TERMINOLOGIES 

// FUNCTIONS AND METHODS 
// DECLARATIONS AND DEFINITION 
// ARGUMENTS AND PARAMETERS
// CALLBACK AND HIGHER ORDER FUNCTIONS


//-------------------------------------------------------------------------------------------------------------------------------------
                     
//FUNCTION DECLARATION AND DEFINITION

//declaring and defining a function pretty much means the same thing

// below lets declare a function that prints out "printing"
/* 1
function printMe(){
 console.log("printing..")
}

printMe() // calling a function 
*/


// we can also define and declare a function, using the function name as a variable almost.
/*2
const printMe2 = function(){
    console.log("print2")
}

printMe2()
*/

// FUNCTION PARAMETERS AND ARGUMENTS

/* 1
function printThis(parameter){
    console.log(parameter)
}

printThis("THIS IS AN ARGUMENT")
*/


/* 2
const printThis2 = function(param1,param2){
 console.log(param1,param2)
}

printThis2("this is argument1", "this is argument2")
*/


//HOW TO RETURN FROM A FUNCTION

/* 1

 function sum(a,b){
    return a+b
 }

  console.log(sum(2,5))

*/

// DEFAULT PARAMETER

/* 1

function calc(a,b=0){
    return (2*(a+b))
}
  // the default parameter in b=0, it means if we forget to pass the b value through an argument, it will by default be 0
console.log(calc(3,6))
console.log(calc(3))

*/

// REST PARAMETER 

//it is a parameter that allows a function to accept ANY NUMBER of arguments. It often accepts these arguments within an array.
// a function definition can have only one rest parameter  and the rest parameter must be the last paramter we define for the function.


/* 1

function coolectThings (x, ...y){
  console.log(x)
  console.log(y)
}

coolectThings(1,2,3,4,5,6,7,8,9)

*/

// ARROW FUNCTIONS 

/* 1

 const add = (x,y) =>{
    return x+y
 }

 console.log(add(7,5))
 */

 // if we return a simple expression as the one above we can even do without the cyrly braces

 /* 2
 const subtract = (x,y) => x-y
 console.log(subtract(3,2))

 */

 // if we have dependecy on only one parameter we can also do without the brackets, making it much simpler

 /* 3

 const multiply = x => 3*x
 console.log(multiply(3))
 */

 // NESTED FUNCTIONS 

 // as the name implies this means defining a function inside another function. 
 // just note that when we do that, the inner function should be called inside the outer function

 /* 1

 function outer(){
    console.log("outer")

    function inner(){
        console.log("inner")
    }
 inner()

 }

 outer()
 */

 // FUNCTION SCOPE 

 // a variable defined inside a function cannot be accessed outside of that function
 // a function can access all the variables inside the scope in which said function defined

 // the outer functionin a nested function cannot access the variables inside the inner function
 // the inner function in a nested function can access all the variables in the outer function in which it is defined

 // CLOSURES 

// in the situztion in which we have an outer function and an inner function, the inner function is the closure
// a more bookish definition is, a closure is a function that can have free variables together with an evironment that can run those variables
// in our inner-outer function analogy, the environment is the inner function, the variables are those defined in the inner function, and there is an ability through which we will be able to run what is inside the inner function

/* 1

 function outer(x){

  function inner(y){
   return x+y // this is b/c the inner function can access the parameters or variables of the outer function
  }
return inner;
 }

 const outerReturn = outer(10)  // this will return undefined but the 10 still lives inside the inner function

 outerReturn(2) // this will give us 12 

 */


 //  CALLBACK FUNCTIONS

// the calback function comes into the picture when we want to pas a function as a parameter to another function

/* 1

// lets suppose in the example below that bar is a function that we are passing a parameter
function food(bar){
 bar(); // we can call the bar function inside our food function using this sinthax, the bar function written like this, and in this context is called a CALLBACK FUNCTION
}

function bar(){
  console.log("bar") // the bar function 
}

food(bar) //calling my food function 

*/

// HIGHER ORDER FUNCTIONS 

// a higher order function is a normal function that has two main properties
//1- it takes one or more functions as arguments
//2- it may return a function


/* 1

function getCapture(camera){
camera()
}

getCapture(function argument(){
  console.log("fist property")
})

*/

/* 2

function getReturn(){

  return function(){
    console.log("second property")
  }

}
 // one of the ways we can access a function that returns a function is as shown below
const fn = getReturn()

fn()

*/

// PURE AND INPURE FUNCTION 

//  a pure function is a function that produces the same output for the same input


// IIFE (IMEDIATELY INVOQUED FUNCTION  EXPRESSIONS)


// CALL STRACK OR FUNCTION EXECUTION STACK

// RECURSION 
// this is when a function calls itself.