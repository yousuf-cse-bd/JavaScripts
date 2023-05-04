/**
 * @file Promise1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Asynchronous: promise using setTimeout() function
 * @version 0.1
 * @date 2023-05-04
 * @since ThursDay; 09:48 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

console.log("Task 1");

const status1 = true;

const promise = new Promise(function(resolve, reject){
    const timeout = 2000;
    setTimeout(() => {
        if(status1){
            resolve("Task 2");
        }
        else{
            reject("Faild..!");
        }
    }, timeout);
});

promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

console.log("Task 3");