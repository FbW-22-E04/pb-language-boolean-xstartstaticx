// 1
console.log("1.1", 3 == "3", "answer is number 2");
console.log("1.2", 3 === "3", "answer is number 7");
console.log("1.3", "answer is number 9");

// 2
let myVar = true;
console.log("2", myVar ? "good morning" : "good evening");

// 3
let firstName = "" || "John" || 0;
let emptyStr = "" || false || "Hello World";
let zero = "" || false || 0;
let seven = 75 && "nine" && 7;

console.log(firstName, emptyStr, zero, seven);
