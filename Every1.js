/**
 * @file Every1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Array every method- check if ALL values are larger than 18
 * @version 0.1
 * @date 2023-04-03
 * @since MonDay; 05:01 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(accessArray);

function accessArray(value, index, array){
    return (value > 18);
}

console.log(numbers);
console.log(allOver18);