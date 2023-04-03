/**
 * @file Filter1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Array map method for accessing array return something
 * @version 0.1
 * @date 2023-04-03
 * @since MonDay; 09:56 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers1 = [45, 4, 9, 16, 25];

const numbers2 = numbers1.filter(accessArray);

function accessArray(value, index, array){
    return value > 10;
}
console.log(numbers1);
console.log(numbers2);