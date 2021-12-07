// What type?

function checkType(arg) {
  console.log("What type?")
  return typeof(arg);
}

console.log(checkType(12));

let typeOf = "this is a string";
console.log(checkType(typeOf));

// Bonus: Examine the output we get when we check the type of an array. Why does this happen? 

//Because arrays are not primitive data types