// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//P: No arrays will be empty.Doesn't matter if they are special character or not since they may be removed,etc .If we change the array,will it mess up indices?nah? nah probs
//R: return an array with every other element starting with no. 1. that means that it will be all odd numbers
//E: if given [1,2,3,4,5,6] => [1,3,5]
//   if given [1,'fish',2,'boss','lazania','best'] => [1,2,'lazania']

function removeEveryOther(arr){
    //make a for loop where I can grab index number
    //if index number is odd,pop that shift off
    //also what do we do about 0 => it is even apparently #scam
    //return new array
    return arr.filter(ind => arr.indexOf(ind) % 2 !== 1) // i said let even stay and odd go lol
}

removeEveryOther([1,2,3,4,5,6])
removeEveryOther([1,'fish',2,'boss','lazania','best'])