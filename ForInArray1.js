/**
 * @file ForInArray1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Go through FOR-OF loop for array or iterable object
 * @version 0.1
 * @date 2023-04-11
 * @since TuesDay; 08:00 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
/**
 * Do not use FOR-IN over a Array if the index ORDER is important.
 * The index order is implementation-dependent, and array values may not be 
 *  accessed in the order you expect.
 * It is better to use a FOR-Loop, a For Of Loop, or Array.forEach() when
 *  the order you expect.
 */
const numbers = [45, 4, 9, 16, 25];
for(const index in numbers){ /*var, let, const supported*/
    console.log(index); /*Return index*/
}
console.log("----------------------------");
for(const index in numbers){
    console.log(numbers[index]); /*Now print values*/
}