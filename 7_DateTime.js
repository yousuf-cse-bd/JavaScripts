/**
 * @file 7_DateTime.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Date class and its some methods
 * @version: 0.1
 * @date 2023-01-30
 * @since MonDay; 11:46 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
var dateTime = new Date();

console.log(dateTime.toDateString());
console.log(dateTime.getDate());
console.log(dateTime.getDay());
console.log(dateTime.getFullYear());
console.log(dateTime.getHours());
console.log(dateTime.getMinutes());
console.log(dateTime.getMonth()); /*0 for january*/
console.log(dateTime.getTime());
console.log(dateTime.toLocaleDateString());
console.log(dateTime.toLocaleTimeString());

delete dateTime; /*I'm not sure, but interpeter is not angree for this line*/
