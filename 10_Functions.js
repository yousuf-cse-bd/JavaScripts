/**
 * @file 10_Functions.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief There are four types of functions
 * @version: 0.1
 * @date 2023-01-31
 * @since TuesDay; 03:07 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
/*Function parameter with return*/
function add1 (number1, number2){
    return (number1 + number2);
}

console.log("From Function: ",add1(10, 15));
/*Function parameter without return*/
function add2 (number1, number2){
    console.log(number1 + number2);
}

add2(10, 15);

/*Function no parameter with return*/
function add3(){
    var number1 = 10, number2 = 15;
    return (number1 + number2);
}

console.log("From function: ", add3());

/*Function no parameter without return*/
function add4(){
    var number1 = 10, number2 = 15;
    console.log(number1 + number2);
}

add4();