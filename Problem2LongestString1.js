/**
 * @file Problem2LongestString1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Find longest string and its index
 * @version 0.1
 * @date 2023-04-21
 * @since FriDay; 09:49 AM
 * @copyright Copyright (c) 2023
 * @institute: Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
longestString = stringList =>{
    let longestString = '';
    for(word of stringList){
        if(longestString.length < word.length){
            longestString = word;
        }
    }
    /*Two values return*/
    return [longestString, stringList.indexOf(longestString)]; 
}

const stringList = ['Yousuf', 'Ali', 'Muhammad', 'Maruf'];
console.log(longestString(stringList));