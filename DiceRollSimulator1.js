/**
 * @file DiceRollSimulator1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Application of random number dice roll simulator 
 * @version 0.1
 * @date 2023-05-14
 * @since SunDay; 08:05 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const diceRollSimulator = (dice) =>{
    let roll = 0;
    for(let i = 1; i <= dice; i++){
        roll = Math.ceil(Math.random()*6);
        console.log(roll);
    }
}

diceRollSimulator(5);