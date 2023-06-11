/**
 * @file PointTable1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Array of Array: Point table
 * @version 0.1
 * @date 2022-06-10
 * @since SunDay; 06:57 PM
 * @copyright Copyright (c) 2022
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

const pointTable = [
    [0, 0],
    [3, 5],
    [5, 7],
    [10, 23]
];

const len = pointTable.length;
for(let i = 0; i < len; i++){
    console.log(`Point (${i}, ${i}) - X = ${pointTable[i][0]} and Y = ${pointTable[i][1]}`);
}