/* Existing functions */
function clickVar() {
  var firstName, lastName, country;
  firstName = "K Anusha";
  lastName = "Rao";
  country = "India";
  document.getElementById("varresult").innerHTML +=
    "My name is " + firstName + " " + lastName + " I am from " + country;

  var value = "100";
  value = Number(value);
  console.log("Number", value);
  value = value.toString();
  console.log("String", value);
  alert("Hello World");
  console.log(document.title);
  document.body.style.backgroundColor = "red";
}

function clickBool() {
  document.getElementById("boolresult").innerHTML +=
    "Comparison and logical operators check results in console";

  // Comparision and Logical Operators
  console.log("4 > 3", 4 > 3);
  console.log("4 >= 3", 4 >= 3);
  console.log("4 < 3", 4 < 3);
  console.log("4 <= 3", 4 <= 3);
  console.log("4 == 4", 4 == 4);
  console.log("4 === 4", 4 === 4);
  console.log("4 != 4", 4 != 4);
  console.log("4 !== 4", 4 !== 4);
  console.log("4 != '4'", 4 != "4");
  console.log("4 == '4'", 4 == "4");
  console.log("4 === '4'", 4 === "4");
  console.log("4 > 3 && 10 < 12", 4 > 3 && 10 < 12);
  console.log("4 > 3 && 10 > 12", 4 > 3 && 10 > 12);
  console.log("4 > 3 || 10 < 12", 4 > 3 || 10 < 12);
  console.log("4 > 3 || 10 > 12", 4 > 3 || 10 > 12);
  console.log("!(4 > 3)", !(4 > 3));
  console.log("!(4 < 3)", !(4 < 3));
}

/* Additional functionalities */

// 1. Check if a number is a prime number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 2. Check if all items in the array are unique
function allUnique(array) {
  const uniqueSet = new Set(array);
  return uniqueSet.size === array.length;
}

// 3. Check if all items in the array are the same data type
function sameDataType(array) {
  if (array.length === 0) return true; // Edge case for empty array
  const dataType = typeof array[0];
  return array.every((item) => typeof item === dataType);
}

// 4. Check if a variable name is valid
function isValidVariable(variableName) {
  const validPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return validPattern.test(variableName);
}

// 5. Generate an array of seven unique random numbers (range 0-9)
function uniqueRandomNumbers() {
  const randomNumbers = new Set();
  while (randomNumbers.size < 7) {
    randomNumbers.add(Math.floor(Math.random() * 10));
  }
  return Array.from(randomNumbers);
}

/* Test in console */
console.log("isPrime(7):", isPrime(7)); // true
console.log("allUnique([1, 2, 3, 3]):", allUnique([1, 2, 3, 3])); // false
console.log("sameDataType([1, 2, 3]):", sameDataType([1, 2, 3])); // true
console.log("sameDataType([1, '2', 3]):", sameDataType([1, "2", 3])); // false
console.log(
  "isValidVariable('$variable_name'):",
  isValidVariable("$variable_name")
); // true
console.log("uniqueRandomNumbers():", uniqueRandomNumbers()); // [0, 1, ..., 9] with unique elements
