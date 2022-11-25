// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//P: what is true and what is false in js?
//R: well it's simple if it's true return 'Yes' and false return 'No'.
//E: console.log(boolToWord(1),'Yes')
// console.log(boolToWord(''),'No')

// first tryyyyyyyy

function boolToWord(bool) {
    return bool ? 'Yes' : "No"
}

console.log(boolToWord(1),'Yes')
console.log(boolToWord(''),'No')