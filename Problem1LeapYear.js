/**
 * @file Problem1LeapYear.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Check leap year or not
 * @version 0.1
 * @date 2023-04-05
 * @since WednesDay; 05:30 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
function isLeapYear(year){
    if((year % 4 === 0) || (year % 400 === 0) && (year % 100 !== 0)){
        console.log(`${year} is a leap year.`);
    }
    else{
        console.log(`${year} is NOT a leap year.`);
    }
}

isLeapYear(2024);

