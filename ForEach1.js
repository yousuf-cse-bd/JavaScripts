/**
 * @file ForEach1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief forEach method for accessing array
 * @version 0.1
 * @date 2023-04-03
 * @since MonDay; 09:30 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

const numbers = [45, 4, 9, 16, 25];

/*If you do shuffle parameters no effect.*/
function accessArray(value, index, array){ 
    console.log(value);
    console.log(index);
    console.log(array);
    console.log(`-----------------------`);
}

numbers.forEach(accessArray);