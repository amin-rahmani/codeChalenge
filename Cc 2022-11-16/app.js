// You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.


// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//P:Given array A,and rando value x.want to see if A has X in it.A can have numbers, strings.X can be a number or a string. Is it ever empty? Undefined? what do we do about special characters?
//R: True if x is in a, false if x is not.But True,false(boolean)
//E: Given [1,2,3] as A and 4 as X, should return False
//   Given [7,5,6,2] as A and 6 as X, should return true
//   Given [] as A and 4 as X, should return False
//P: make a function that takes in 2 parameters: an array , and a rando number.

function numInArray(arr, num) {
    //look through in the array and see if num is in it or not
    return arr.includes(num)
}

numInArray([1,2,3],4)
numInArray([7,6,5,2],6)
numInArray([],4)