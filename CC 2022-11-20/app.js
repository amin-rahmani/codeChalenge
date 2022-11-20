// DESCRIPTION:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

//P: only give string of alphabet ... no number, no array will be empty?,it doesn't matter if it's special character , does it care we return it with number or string ,prob nah
//R: return the maximum of the difference in the array that we can get so we need to go with for inside of for
// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string
    // function mxdiflg(a1, a2) {
    //     let best = 0
    //     for (const x of a1) {
    //         for (const y of a2) {
    //             const difference = Math.abs(x.length - y.length);
    //             if (difference > best) best = difference;
    //         }
    //     }
    //     return best
    // }

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]),13);

// so the problem above is that if they give 1  or both array of empty than there can be no difference so it should return -1

// function mxdiflg(a1, a2) {
//     let best = -1
//     for (const x of a1) {
//         for (const y of a2) {
//             const difference = Math.abs(x.length - y.length);
//             if (difference > best) best = difference;
//         }
//     }
//     return best
// }

//fast way

// function mxdiflg(a1,a2){
//     if(!a1.length || !a2.letgth) return -1;
//     let best = 0;
//     for(const x of a1){
//         for(const y of a2){
//             best = Math.max(best,Math.abs(x.length - y.length));
//         }
//     }
//     return best;
// }

// const mxdiflg = (a1, a2, c) => a1.reduce((res, x) => (a2.forEach(y => (c = Math.abs(x.length - y.length)) > res ? res = c : 0), res), -1)