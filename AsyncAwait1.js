/**
 * @file AsyncAwait1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Simplification promised chain by async-await
 * @version 0.1
 * @date 2023-05-04
 * @since FriDay; 08:42 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const paymentSucces = true;

function enroll(){
    console.log("The cource enrollment is in progress...");

    const promiseEnroll = new Promise((resolve, reject) =>{
        const timeout = 2000;
        setTimeout(() => {
            if(paymentSucces){
                resolve(); /*callBack*/
            }
            else{
                reject("Payment faild!!");
            }
        }, timeout);
    });
    return promiseEnroll;
}


const marks = 80;

function progress(){
    console.log("Cource on progress...");
    const passMarks = 80;

    const promiseProgress = new Promise((resolve, reject)=>{
        const timeout = 3000;
        setTimeout(() => {
            if(marks >= passMarks && marks <= 100){
                resolve(); /*callBack*/
            }
            else{
                reject("You could not get enough marks for get the certificate...!");
            }
        }, timeout);
    });

    return promiseProgress;
}


function getCertificate(){
    console.log("Preparing your certificate...");

    const promiseGetCertificate = new Promise((resolve)=>{
        const timeout = 1000;
        setTimeout(() => {
            resolve("Congrates! You got the certificate.");
        }, timeout);
    });

    return promiseGetCertificate;
}

async function course(){
    try{
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    }
    catch(err){
        console.log(err);
    }
}

course();
// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })