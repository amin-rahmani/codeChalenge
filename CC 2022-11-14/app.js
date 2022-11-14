// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//P: Are you ever given an empty array or undefinced?what then? Are you always given digits?
//R: whateven number was given, it is now split up into an array and the order of the numbers is reversed.
//E: if we were given 9238 => [8,3,2,9]
//   if we were given 330 => [0,3,3]
//   if we were given 0 => [0]
//   if we were given 35231 => [1,3,2,5,3]
//   if we were given undefined => not a number
//P:make a function that takes in a number
function reverseArray(num){
    //make number a string and split that
    return num.toString().split('').reverse().map(e => +e)
    //reverse array
    //make array integers again and return
}
console.log(reverseArray(9238),[8,3,2,9]);
console.log(reverseArray(330),[0,3,3]);
console.log(reverseArray(0),[0]);
// we use map and makes it simple