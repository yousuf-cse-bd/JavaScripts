/**
 * @file CallbackPattern1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Simple enrolment demo using callback pattern
 * @version 0.1
 * @date 2023-05-04
 * @since ThursDay; 08:48 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const paymentSuccess = true;
function enroll(callBack){
    const sleepTimeSec = 2000;
    console.log("Cource enrollment is in progress...");
    setTimeout(function(){
        if(paymentSuccess){
            callBack();
        }
        else{
            console.log("Payment faild!!");
        }

    },sleepTimeSec);
}

const marks = 80;
function progress(callBack){
    console.log("Course on progress...");
    const sleepTimeSec = 3000;
    const passMarks = 80;
    setTimeout(function(){
        if(marks >= passMarks && marks <= 100){
            callBack();
        }
        else{
            console.log("You could not get enough marks for get the certificate..!");
        }
    }, sleepTimeSec);
}

function getCertificate(){
    console.log("Preparing your certificate...");
    const sleepTimeSec = 1000;

    setTimeout(function(){
        console.log("Congrates! You got the certifacte.");
    }, sleepTimeSec);
}

enroll(function(){
    progress(getCertificate);
});
