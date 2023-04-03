/**
 * @file ArrayFindIndex1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief The findIndex() method return the index of the frist array element that passess a test function
 * @version 0.1
 * @date 2023-04-03
 * @since MonDay; 05:43 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers = [4, 9, 16, 25, 29];

let fristIndexOver18 = numbers.findIndex(accessArray);

function accessArray(value, index, array){
    return (value > 18);
}

let firstValueOver18 = numbers.find(accessArray);
function accessArray(value, index, array){
    return (value > 18)
}

console.log(numbers);
console.log(fristIndexOver18);
console.log(firstValueOver18);

