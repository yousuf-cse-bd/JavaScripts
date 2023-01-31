/**
 * @file 12_FunctionExpression.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Function expressions in JavaScript are not hoisted
 * @version: 0.1
 * @date 2023-01-31
 * @since TuesDay; 09:04 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
var functionExpression1 = function(){
    console.log("This is a no parameterize function.");
}

functionExpression1();

var functionExpression2 = function(number1, number2){
    console.log(number1 + number2);
}

functionExpression2(10,15);

var functionExpression3 = function(number1, number2){
    return (number1 + number2);
}

console.log(functionExpression3(10, 30));

var functionExpression4 = function(){
    functionExpression4 = 10;
    return (functionExpression4*10);
}

console.log(functionExpression4());