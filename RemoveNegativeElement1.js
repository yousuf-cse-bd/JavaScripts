/**
 * @file RemoveNegativeElement1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Remove negative element from an array list
 * @version 0.1
 * @date 2023-04-28
 * @since TuesDay; 09:14 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

console.log(myNumbers);
console.log("--------------------------------------");

/*Remove negative element*/
removeNegativeElement1 = myNumbers =>{
    const positiveArray = [];
    for(const num of myNumbers){
        if(num >= 0){
            positiveArray.push(num);
        }
    }
    return positiveArray;
}

console.log(removeNegativeElement1(myNumbers));

console.log("--------------------------------------");

filterPostive = x => x >= 0;

function removeNegative(numbers, callBack){
    const myArray = [];

    for(const x of numbers){
        if(callBack(x)){
            myArray.push(x);
        }
    }
    return myArray;
}

const positiveNumbers = removeNegative(myNumbers, filterPostive);
console.log(positiveNumbers);

