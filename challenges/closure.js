// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: The const "internal" and the nestedFunction are both inside of the myFunction block so the nestedFunction is able to call upon anything withing that scope. It can reach back but not forward into other functions (if there were any others).


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(parameter){
  let total = 0
  for(var i = 0; i <= parameter; i++){
    total += i
    console.log(total)
  }
}
summation(4)