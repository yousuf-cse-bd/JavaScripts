/**
 * @file GetRandInteger1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Random number -> integer number
 * @version 0.1
 * @date 2023-04-05
 * @since WednesDay; 10:28 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

/*This function alwayas returns a rsndom number between min(included)
and max (excluded)*/
function getRandInteger1(min, max){
    return Math.floor(Math.random() * (max - min)) + min; 
}

console.log(getRandInteger1(0, 5));
console.log("----------------------------------------");

/*This function alwyas returns a random number between min & max (both included)*/
function getRandInteger2(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandInteger2(0, 5));