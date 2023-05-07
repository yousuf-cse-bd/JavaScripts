/**
 * @file ObjectInsderFunction1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Power of JavaScript object
 * @version 0.1
 * @date 2023-01-26
 * @since ThursDay; 12:02 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const person = {
    firstName: "Md. Yousuf",
    lastName: "Ali",
    fullName: function(){
        console.log(this.firstName + " " +this.lastName);
    },
    deptName: function(){
        console.log("CSE");
    },
};

console.log(person.deptName());