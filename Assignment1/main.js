/*
A. Part 1: Coding Questions (7.5 Grade):

 */

// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
console.log("Assignment 1:")
let mySrt = "123";
mysrt = Number(mySrt) + 7;
console.log(mysrt);

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
console.log("Assignment 2:")
let givenVar = 0;
if (Boolean(givenVar) === false) console.log("Invalid");

//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9
console.log("Assignment 3:")
for (let i=1 ; i<10 ;i++ ){
    if (i % 2 === 0) {
    continue;
    }
    console.log(i);
}


// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]
console.log("Assignment 4:")
let arr = [1, 2, 3, 4, 5];

function evenNumbers(numBer){
    if (numBer % 2  === 0){
        return numBer;
    }
}
arr.filter(evenNumbers);
console.log(arr.filter(evenNumbers));
console.log("main",arr);



// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]
console.log("Assignment  5 :")
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArr = [...arr1, ...arr2];

console.log(mergedArr);


// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

let dayNum =  7;

switch (dayNum){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Try a valid number");
        break;

}

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

let arrStr = ["a", "ab", "abc"];
arrStr =arrStr.map(
    function (item) {
        item= item.length;
        return item;
    }
)
console.log(arrStr);



// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

function isDividableBy(num = Number){
    if (num % 3 ===0 && num % 3 === 0){
        console.log("“Divisible by both”");
    }
    else{
        console.log("Not")
    }
}
isDividableBy(15);


// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

let arrowSyntaxSquareOfNumber = (num) => num ** 2;
console.log(arrowSyntaxSquareOfNumber(5));


// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

const person = {name: 'John', age: 25}

function destructObject(object){
     let {name, age, ...rest} = object;
    let message;
    message = name + ' is ' + age + " years old";
     return console.log(message);
}
destructObject(person);



// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

function computeSum(...numbers) {
    let [] = numbers;
    let result = numbers.reduce((sum ,current) => sum + current);
    return console.log(result);
}

computeSum(1,2,3,4,5)


// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”

/*
* لم اذاكرها بعد!
* */



// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

let largeArr = [1, 3, 7, 2, 4];

function findLargestNum(arr){
    const largest = Math.max(...largeArr);
    return console.log(largest);

}

findLargestNum(largeArr);

    // 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
    // • Input Example: name: "John", age: 30}
    // • Output Example: ["name", "age"]


function getKey(obj){
    return Object.keys(obj);
}

console.log(getKey(person));



// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]


let arrChr = "The quick brown fox".split(" ");
console.log(arrChr);