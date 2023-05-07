/**
 * @file For__inLoop1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief The block of code inside of the for...in loop will be executed once for each property
 * @version 0.1
 * @date 2023-05-07
 * @since SunDay; 11:10 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

"use strict";

const person = {
    firstName: 'Muhammad',
    lastName: 'Yousuf',
    age: 26 
};

for(const x  in person){
    console.log(x); /*Return properties */
}

console.log("------------------------------");

for(const x in person){
    console.log(person[x]); //Must syntax use arry or subscript notation
}