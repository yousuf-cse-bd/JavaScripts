/**
 * @file Problem2RemoveFalsyValue2.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Remove falsye elements from mixedArray-list using boolean function
 * @version 0.1
 * @date 2023-04-23
 * @since SunDay; 11:04 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const mixedArray = [
    'lws',
    undefined,
    'learn with Summit',
    false,
    '',
    'apple',
    40,
    'k',
    true,
    'Thanks all',
    NaN
];
console.log(`Given array: ${mixedArray}`);

const solidArray = mixedArray.filter(Boolean);
    /*There are only SIX falsy values in JavaScript*/
    /*undefined, null, NaN, '', false, 0*/

console.log(`True array: ${solidArray}`);