// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


//P: does he give us an empty array?or string inside of the array?does he gonna give us string with integer?prob nah

//R: we are going to iterate an array and pow them by 2, and return the sum of it

//E : console.log(squareSum([1,2,2]),9)


//FIRST SOLUTION

// function squareSum(numbers) {
//     let sum = 0
//     for (let num of numbers) {
//         num = num ** 2
//         sum += num
//     }
//     return sum
// }

console.log(squareSum[1, 2, 2]);

// fast solution

function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}