/**
 * @file ArrayFind1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief The find() method return the value of the frist array element that passess a test function
 * @version 0.1
 * @date 2023-04-03
 * @since MonDay; 5:25 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers = [45, 4, 9, 16, 25];

function accessArray(value, index, array){
    return (value > 18);
}

const newNumber = numbers.find(accessArray);
console.log(numbers);
console.log(newNumber);