/**
 * @file CallBackFunction1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief It just function pointered update version
 * @version 0.1
 * @date 2023-04-26
 * @since WednesDay; 9:50 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const display = function(result){
    console.log(result);
};

const sumCalculator = function(number1, number2, callBack){
    const sum = number1 + number2;
    if(callBack){
        callBack(sum); /*display(sum)*/
    }
    return (sum);
};

sumCalculator(15, 10, display);
display(sumCalculator(10, 15));