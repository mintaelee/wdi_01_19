/**
 * Syntax
 * var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 * 
 * Parameters: 
 * callback
 * Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise. It accepts three arguments:
 *** element
 **** The current element being processed in the array.
 *** index(Optional)
 **** The index of the current element being processed in the array.
 *** array(Optional)
 **** The array filter was called upon.
 *** thisArg(Optional)
 **** Value to use as this when executing callback.
 * 
 * Return value
 * A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 */

// 1
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// 2
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    console.log("Adults: ", ages.filter(checkAdult))
}

myFunction()
// Adults:  [ 32, 33, 40 ]

// 3
function isBigEnough(value) {
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

// 4
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var invalidEntries = 0;
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    } 
    invalidEntries++;
    return false; 
  }
  
var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID); 
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries); 
// Number of Invalid Entries = 5

// 5
var heroes = [
	{name: "Batman", franchise: "DC"},
	{name: "Ironman", franchise: "Marvel"},
	{name: "Thor", franchise: "Marvel"},
	{name: "Superman", franchise: "DC"}
];

var marvelHeroes = heroes.filter(hero => hero.franchise == "Marvel")

console.log("marvelHeroes: ", marvelHeroes)
/**
 * marvelHeroes:  [
    { name: 'Ironman', franchise: 'Marvel' },
    { name: 'Thor', franchise: 'Marvel' }
    ]
 */


/**
 * Practice:
 */
// 1. Write an extension for array of integers that returns the number of times a specific digit appears in any of its numbers.
// [5, 15, 55, "515"].solution("5") == 6

Array.prototype.solution2 = function(num) {
    return this.join("").split("").filter(e => e == num).length;
}

let tar = [5, 15, 55, "515"] 

function sol(arr, num) {
    return arr.join("").split("").filter(e => e == num).length;
}

console.log(sol(tar, "5"))


// 2. Write a function that accepts a string as its input, and returns the same string just with duplicate letters removed.
// solution("Mississippi") === "Misp"

function solution4(str) {
    return str.split("").filter(
        function(letter, index, array){
            return array.indexOf(letter) == index;
        }
    ).join("");
}

function solution5(str) {
    return str.split("").filter((e, i, arr) => arr.indexOf(e) == i).join("");
}