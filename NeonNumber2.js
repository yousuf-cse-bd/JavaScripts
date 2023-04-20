/**
 * @file NeonNumber2.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Check Neon number or not using arrow function
 * @version 0.1
 * @date 2023-04-20
 * @since ThursDay; 09:25 PM
 * @copyright Copyright (c) 2023
 * @institute: Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
isNeonNumber = number => {
    let square = 0, sum = 0;
    square = Math.pow(number, 2);
    
    while(square !== 0){
        sum += square % 10;
        square /= 10;
        square = Math.floor(square);
    }
    
    return (sum === number?true:false);
}

console.log(isNeonNumber(9));