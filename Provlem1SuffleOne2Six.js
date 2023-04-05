/**
 * @file Provlem1SuffleOne2Six.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief This function alwyas returns a random number between min & max (both included).
 * @version 0.1
 * @date 2023-04-05
 * @since WednesDay; 10:40 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

function luduOne2Six(minLimit, maxLimit){
    return Math.ceil(Math.random() * (maxLimit - minLimit)) + minLimit;
}

console.log(luduOne2Six(1, 6));
