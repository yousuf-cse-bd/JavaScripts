/**
 * @file ReduceRight1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Array reduceRight() for accessing array return something (right 2 left)
 * @version 0.1
 * @date 2023-04-03
 * @since MonDay; 10:20 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const numbers1 = [45, 4, 9, 16, 25];

const sum1 = numbers1.reduceRight(accessArray);

/*Initially total = 0*/
function accessArray(total, value, index, array){
    return (total + value);
}
console.log(numbers1);
console.log(`Sum: `+sum1);

console.log('-------------------------------------------');

const numbers2 = [45, 4, 9, 16, 25];

const sum2 = numbers2.reduceRight(accessArray, 10);

/*Initially total = 10*/
function accessArray(total, value, index, array){
    return (total + value);
}
console.log(numbers1);
console.log(`Sum: `+sum2);