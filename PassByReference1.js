/**
 * @file PassByReference1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Objects are mutable: The are addessed by reference, not by value
 * @version 0.1
 * @date 2023-05-07
 * @since SunDay; 08:59 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const person = {firstName: 'Yousuf', lastName: 'Ali'};

console.log(person);

const changeElement = function(person){
    person.firstName = 'Muhammad';
    person.lastName = 'Tameem';
    return person; /*return statement is optional*/
};

changeElement(person);

console.log(person);

