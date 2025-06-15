console.log("hello world");

let number = 100
let String = "one hundred"

console.log(number +" "+ String);

let number2 = 20
let sum = number + number2
console.log(sum);
let a = typeof(sum)
console.log(a);

let student  = {
    name : "sarim",
    age : 19,
    city : "karachi",
    isStudent : true,
}
console.log(student);

const teacher = {
    name : "Muhammad",
    age : 42,
    isTeacher : true,
    city : "islamabad",
}
console.log(teacher);
console.log(teacher.age);

teacher.age = teacher.age + 5;
console.log(teacher.age);

// Function 1: Using includes() method
function hasWhitespace(str) {
    return str.includes(' ');
}

// Function 2: Using indexOf() method
function findWhitespaceIndex(str) {
    return str.indexOf(' ');
}

// Function 3: Using regular expression
function hasWhitespaceRegex(str) {
    return /\s/.test(str);
}

// Example usage
let testString = "Hello World";
console.log("Using includes():", hasWhitespace(testString));  // true
console.log("Using indexOf():", findWhitespaceIndex(testString));  // 5
console.log("Using regex:", hasWhitespaceRegex(testString));  // true

// Test with string without whitespace
let noSpaceString = "HelloWorld";
console.log("No space string test:", hasWhitespace(noSpaceString));  // false
