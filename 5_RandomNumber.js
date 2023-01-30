/**
 * @file 5_RandomNumber.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief The random number generator by Math class
 * @version: 0.1
 * @date 2023-01-30
 * @since MonDay; 10:05 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

var randomNumber = Math.random(); /*Limit 0-1*/
console.log(randomNumber);

randomNumber *= 100; /*Limit 0-100*/
randomNumber = parseInt(randomNumber);
console.log(randomNumber);