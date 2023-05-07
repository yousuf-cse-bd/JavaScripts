/**
 * @file ObjectPropertiesEvaluate1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Accessing JavaScript Properties
 * @version 0.1
 * @date 2023-05-07
 * @since SunDay; 10:51 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

"use strict";

const yousufStudent = {
    firstName: 'Muhammad',
    lastname: 'Yousuf',
    id: 171311101,
};

console.log(yousufStudent);

console.log(`FirstName: ${yousufStudent.firstName} LastName: ${yousufStudent.lastname} and ID: ${yousufStudent.lastname}`);
console.log("---------------------------------------------------");

const myID = 'id';

console.log("FirstName: "+yousufStudent.firstName);
console.log("Last Name: "+yousufStudent['lastname']);
console.log("ID: "+yousufStudent[myID]);

