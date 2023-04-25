/**
 * @file SwapPassByReference.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Pass by reference using object
 * @version 0.1
 * @date 2023-04-25
 * @since TuesDay; 11:33 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const swap = function (reference){
    let temp = reference.x;
    reference.x = reference.y;
    reference.y = temp;
    /*Default return undefined value*/
}

const pair = {
    x: 10,
    y: 15
};

/*Before swap*/
console.log(pair); 

swap(pair);  /*call with memory address*/

/*After swap */
console.log(pair);