/**
 * @file FunctionOverLoading1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Function overloading is depend on the length of arguments in JavaScript
 * @version 0.1
 * @date 2023-04-25
 * @since TuesDay; 11:15 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const sum = function(){ /*Function return value always constant*/
    const argLength = arguments.length;
    let sum = 0;
    if(argLength === 0){
        console.log(`You have pass ${argLength} argument.`);
    }
    else if(argLength === 1){
        console.log(`You have pass ${argLength} argument.`);
        sum = arguments[0];  
    }
    else if(argLength === 2){
        console.log(`You have pass ${argLength} argument.`);
        sum = arguments[0] + arguments[1];
    }
    else{
        console.log(`You have pass ${argLength} argument.`);
        for(let value of arguments){ /*argumnents is an array*/
            sum += value;
        }
    }
    return sum;
}

console.log(`Summation of ${sum()}`);
console.log(`Summation of ${sum(5)}`);
console.log(`Summation of ${sum(5, 9)}`);
console.log(`Summation of ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);
