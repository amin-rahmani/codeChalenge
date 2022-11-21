// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//P: does he give us empty array or string?it does matter to only choose the integer.does he gonna give us string with integer?prob nah.should we only return the length of the integer?does integer has the length property?

//R: anyway we gonna delete string and only have integer and then return the length of the string or array so if it only give us integer we should change it to string because length should work
//E: console.log(digits('123445'),6)
//E: console.log(digits(1234),4)
//E: console.log(digits(123456789),9)
function digits(n){
    return n.toString().length
}

console.log(digits('123445'),6)
console.log(digits(1234),4)
console.log(digits(123456789),9)