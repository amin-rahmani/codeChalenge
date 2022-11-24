// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//P: Are you ever given an empty array or undefinced?what then? Are you always given two numbers?shall i return it in number?

//R:first we gonna add two number and we gonna divide it by two until get's smaller than 1 . becarfull always remove the decimal number 


//first solution


// function addBinary(a,b) {
//     let sum = a + b;
//     let binary = '';
//     for (let i = 1;i<= sum;){
//         sum = sum/2
//         if(sum != Math.floor(sum)){
//             binary += '1'
//         }else{
//             binary += '0'
//         }
//         sum = Math.floor(sum)
//     }
//   return binary.split('').reverse().join('');
// }

console.log(addBinary(1, 1), 10);
console.log(addBinary(5, 9), 1110);

//fast solution

function addBinary(a, b) {
    return (a + b).toString(2)
}

// so method toString(2) huhhh