/**
 * @file Problem2RemoveFalsyValue1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Remove falsye elements from mixedArray-list
 * @version 0.1
 * @date 2023-04-23
 * @since SunDay; 10:58 AM
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

const solidArray = mixedArray.filter(function(value, index, array){
    /*There are only SIX falsy values in JavaScript*/
    /*undefined, null, NaN, '', false, 0*/
    if(value){
        return true;
    }
    else{
        return false; /*Optional*/
    }

});

console.log(`True array: ${solidArray}`);