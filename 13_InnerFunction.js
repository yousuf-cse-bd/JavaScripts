/**
 * @file 13_InnerFunction.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Fun with inner function
 * @version: 0.1
 * @date 2023-01-31
 * @since TuesDay; 09:33 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
function outerFunction(){
    let outer = "Outer Function";
    function innerFunction(){
        let inner = "Inner Function";
        console.log(outer);
    }
    innerFunction();
}

outerFunction();

function outerFunction1(number1){
    function innerFunction1(number2){
        return (number1*number2);
    }
    return innerFunction1(10);
}

console.log(outerFunction1(10));