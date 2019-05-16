/**
 * Syntax
 * arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 */

/**
 * ParametersSection

callback
A function to execute on each element in the array (except for the first, if no initialValue is supplied), taking four arguments:
accumulator
The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
currentValue
The current element being processed in the array.
currentIndex Optional
The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, starts from index 1. 
array Optional
The array reduce() was called upon.
initialValue Optional
A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initialValue will throw a TypeError. 
Return valueSection

The single value that results from the reduction.
 */

// 1
let arr = [1, 2, 3]

let sum = arr.reduce((accumulator, item, index) => {
    accumulator += item;
    return accumulator;
}, "Initial value of accumulator: ");

console.log('sum: ', sum);

// 2
let sum2 = arr.reduce((acc, item, index) => acc + item, 10);
console.log('sum2: ', sum2);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3
let sum3 = arr2.reduce((acc, num) => num % 2 == 0 ? acc + num: acc, 0)
console.log('sum3: ', sum3);

// 4
var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

var totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
}, 0);
console.log('totalYears', totalYears)


// Let’s see how this can be shortened with ES6’s arrow functions:
const totalYears2 = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
console.log('totalYears2', totalYears2)

// Now let’s say I want to find which pilot is the most experienced one. For that, I can use reduce as well:
var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

console.log('mostExpPilot: ', mostExpPilot)

let mostExpPilot2 = pilots.reduce((acc, pilot) => (acc.years > pilot.years) ? acc : pilot, 0)
console.log('mostExpPilot2: ', mostExpPilot2)

let mostExpPilot3 = pilots.reduce((oldest, pilot) => (oldest.years || 0) > pilot.years ? oldest : pilot , {})
console.log('mostExpPilot3: ', mostExpPilot3)


// Practice:
// 1. Write a function that accepts a string as its input, and returns the same string just with duplicate letters removed.
// solution("Mississippi") === "Misp"

function solution2(str) {
    return str.split("").reduce(
        function(acc, e) {
            if (acc.indexOf(e) == -1) acc += e;
        
            return acc;
        }, ""
    );
}

function solution3(str) {
    return str.split("").reduce((acc, e) => acc += acc.indexOf(e) == -1 ? e : "", "");
}

// 2. Write a function that accepts a string, and returns how many times a specific character appears, taking case into account.
// solution("Mississippi", "i") == 4

function solution2(str1, str2) {
    return str1.split("").reduce(
        function(acc, e) {
            if (e === str2) acc++;

            return acc;
        }, 0
    )
}

function solution3(str1, str2) {
    return str1.split("").reduce((acc, e) => acc += e === str2 ? 1 : 0, 0);
}

function solution4(str, letter){
    return str.split("").reduce((acc, item) => item === letter ? acc += item : acc, '').length
}