/**
 * @file CountOccurrences1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Count the Occurrences of a Value in an Array 
 * @version 0.1
 * @date 2023-05-14
 * @since SunDay; 07:46 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const countOccurrence = (myArray, toFind) =>{
    let count = 0;
    for(const x of myArray){
        if(x === toFind){
            count++;
        }
    }
    return count;
};

const myArray = [4, 5, 6, 2, 1, 5, 9];

console.log(countOccurrence(myArray, 5));
console.log(countOccurrence([4, 5, 6, 2, 1, 5, 9], 5));