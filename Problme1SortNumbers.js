/**
 * @file Problme1SortNumbers.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Sorting array elements ascending and descending order
 * @version 0.1
 * @date 2023-04-05
 * @since WednesDay; 05:09 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const rollNumbers = [3, 5, 1, 6, 2, 30];
console.log(rollNumbers);

rollNumbers.sort(function(a, b){return a - b}); /*Ascending*/
console.log(rollNumbers);

rollNumbers.sort(function(a, b){return b - a}); /*Descending*/
console.log(rollNumbers);