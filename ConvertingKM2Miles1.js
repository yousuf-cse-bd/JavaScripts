/**
 * @file ConvertingKM2Miles1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Converting Kilometers To Miles 
 * @version 0.1
 * @date 2023-05-18
 * @since ThursDay; 05:39 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const kmToMiles = km => km * 0.621371;

const kmToNauticalMiles = km => km * 0.539957;

console.log(kmToMiles(5));
console.log(kmToNauticalMiles(5));

