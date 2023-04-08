/**
 * @file IsNanApplication1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Number safety from end user input value
 * @version 0.1
 * @date 2023-04-08
 * @since SaturDay; 10:30 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
let age = '18';
age = Number(age);

if(isNaN(age)){
    console.log("Input is not a number!!!");
}
else{
    console.log(age >= 18 ? "Old enough":"Too young");
}