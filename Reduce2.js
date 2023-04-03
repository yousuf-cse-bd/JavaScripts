/**
 * @file Reduce2.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Array map method for accessing array return something
 * @version 0.1
 * @date 2023-04-03
 * @since MonDay; 10:07 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers1 = [45, 4, 9, 16, 25];

const sum = numbers1.reduce(accessArray, 10);

/*Initially total = 10*/
function accessArray(total, value, index, array){
    return (total + value);
}
console.log(numbers1);
console.log(`Sum: `+sum);