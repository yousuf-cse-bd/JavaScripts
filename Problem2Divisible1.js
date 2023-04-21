/**
 * @file Problem2Divisible1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Divisible by 3, 5 and 15
 * @version 0.1
 * @date 2023-04-21
 * @since FriDay; 05:13 PM
 * @copyright Copyright (c) 2023
 * @institute: Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
divisible = (lowerLimit, upperLimit) =>{
    if(lowerLimit > upperLimit){
        let temp = lowerLimit;
        lowerLimit = upperLimit;
        upperLimit = temp;
    }
    function divisibleBy3(number){
        if(number % 3 === 0){
            return true;
        }
    }
    function divisibleBy5(number){
        if(number % 5 === 0){
            return true;
        }
    }
    for(let i = lowerLimit; i <= upperLimit; i++){
        if(divisibleBy3(i)){
            console.log(`${i} is divisible by 3`);
        }
        if(divisibleBy5(i)){
            console.log(`${i} is divisible by 5`);
        }
        if(divisibleBy3(i) && divisibleBy5(i)){ /*i % 15 === 0*/
            console.log(`${i} is divisible by 3 & 5`);
        }
        else{
            console.log(i);
        }
    }
}

divisible(1, 100);

