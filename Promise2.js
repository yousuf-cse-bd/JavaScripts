/**
 * @file Promise2.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Asynchronous: promise using setTimeout() all arrow functions
 * @version 0.1
 * @date 2023-05-04
 * @since ThursDay; 09:48 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const status1 = true;
const promise = new Promise((resolve, reject)=>{
    const timeout = 1000;
    setTimeout(() => {
        if(status1){
            resolve("Task 2");
        }
        else{
            reject("Faild!");
        }
    }, timeout);
});


console.log("Task 1");


promise
    .then((value)=>{
        console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log("Task 3");