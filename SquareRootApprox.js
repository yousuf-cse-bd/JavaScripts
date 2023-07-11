/**
 * @file SquareRootApprox.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief The custom square root method
 * @version: 0.1
 * @date 2023-07-11
 * @since TuesDay; 11:03 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const squareRootApprox = number =>{
    let nextGuess = 1;
    let lastGuess = 1;
    number = Math.abs(number);

    do{
        nextGuess = (lastGuess + (number/lastGuess))/2;
        if(Math.abs(nextGuess - lastGuess)< 0.000000001){
            return nextGuess;
        }
        lastGuess = nextGuess;

    }while(true);
}

let number = 2;

console.log("Using Sqrt(): "+Math.sqrt(number));
console.log("Using Approxmetry: "+squareRootApprox(number));
console.log("Using pow():"+Math.pow(number, 0.5));