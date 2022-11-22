// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

//P:does it give us empty object?only object?does it matter if they are special character?
//R: return an string with the key = value of an object
// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
//first solution
// function solution(pairs){
//     const arr = []
//     for(const key in pairs){
//         arr.push(`${key} = ${pairs[key]}`)
//     }
//     return arr.join()
// }

// codewars solution
function solution(pairs) {
    return Object.entries(pairs).map(pair => pair.join(' = ')).join(',')
}
solution({a: 1, b: '2'})