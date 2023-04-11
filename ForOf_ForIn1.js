/**
 * @file ForOf_FoIn1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief To array traversing using raw for, for-of, Array.forEach() method
 * @version 0.1
 * @date 2023-04-11
 * @since TuesDay; 08:07 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers = [15, 36, 34, 17, 11, 9];
for(let index in numbers){
    console.log(index);
}

console.log("-----------------------------------");
for(let value of numbers){
    console.log(value);
}