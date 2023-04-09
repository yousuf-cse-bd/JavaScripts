/**
 * @file SwitchCaseForWeek.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief An examole to applying switch-case statement for an week
 * @version 0.1
 * @date 2023-04-09
 * @since SunDay; 07:32 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
switch(new Date().getDay()){
    case 0: console.log("SunDay"); break;
    case 1: console.log("MonDay"); break;
    case 2: console.log("TuesDay"); break;
    case 3: console.log("WednesDay"); break;
    case 4: console.log("ThursDay"); break;
    case 5: console.log("FriDay"); break;
    case 6: console.log("SaturDay"); break;
    default: console.log("Out of week"); break;
}
