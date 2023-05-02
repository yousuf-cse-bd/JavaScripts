/**
 * @file AnonymousCallBack.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief A callBack function using anonymous function
 * @version 0.1
 * @date 2023-05-02
 * @since TuesDay; 05:07 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
calculator = function(number1, number2, callBack){
    const sum = number1 + number2;
    if(callBack) callBack(sum);

    return sum;
}


calculator(15, 25, function(sum){
    console.log(sum);
});
