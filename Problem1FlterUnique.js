/**
 * @file Problem1FlterUnique.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Filter unique elements from array list
 * @version 0.1
 * @date 2023-04-06
 * @since ThursDay; 10:06 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const uniques = numbers.filter(function(value, index, array){
    return array.indexOf(value) === index;
});

console.log(numbers);
console.log(uniques);