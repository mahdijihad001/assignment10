// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference (value1 , value2) {
    let retult = value1 - value2 ;
    return retult;
}

console.log(calculateDifference(50 , 30));

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(39));

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

let marks = [33  ,11  , 50 , 70 , 41 , 60 , 90 , 100];

function findMin(numbers) {
    return Math.min(...numbers);
}
console.log(findMin(marks))

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

let age =  [33  ,11 , 14 , 9 , 31 , 14   , 50];

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
console.log(filterEvenNumbers(age));


// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

const arraySort = [2 , 3 ,5 , 9 , 41 , 43 , 11 , 8 , 4];
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

console.log(sortArrayDescending(arraySort));




// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
const lowercaseFirstLetter = str => str ? str[0].toLowerCase() + str.slice(1) : '';

console.log(lowercaseFirstLetter("HELLO"));
console.log(lowercaseFirstLetter("WORLD")); 

// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
  }
  

  console.log(countVowels("Hello")); 
  console.log(countVowels("World")); 
  

//   8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(arr) {
    if (arr.length === 0) return 0; 
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  
  console.log(findAverage([1, 2, 3, 4, 5])); 
  console.log(findAverage([10, 20, 30])); 
  
