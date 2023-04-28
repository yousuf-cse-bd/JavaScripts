/**
 * @file Script.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Remove negative element from an array list
 * @version 0.1
 * @date 2023-04-28
 * @since TuesDay; 09:14 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const filterPositive = num => num >= 0;

const removeNegativeElement = function(myNumbers, callBack){
    const myArray = [];
    for(const x of myNumbers){
        if(callBack(x)){
            myArray.push(x);
        }
    }
    return myArray;
}

document.getElementById("demo").innerHTML = removeNegativeElement(myNumbers, filterPositive);