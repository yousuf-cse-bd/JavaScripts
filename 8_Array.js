/**
 * @file 8_Array.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Array list and its built-in methods
 * @version: 0.1
 * @date 2023-01-31
 * @since TuesDay; 11:36 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
var friendName = ["Yousuf", "Tamim", "Maruf", "Istiak"];

console.log(friendName);
console.log(friendName[3]);
friendName[3] = "Muwaz";
console.log(friendName);

friendName.push("Toma"); /*Add a new elments last index*/
console.log(friendName);

friendName.pop(); /*Delete the last elemnts*/
console.log(friendName);

friendName.shift(); /*Delete the first elemnts*/
console.log(friendName);

friendName.unshift("MuhammadYousuf"); /*Add a new elments first index*/
console.log(friendName);  

console.log(friendName.slice(1,2)); /*Tamim*/

friendName.splice(0, 2, "YousufAli", "TofayelTamim");
console.log(friendName);

/*splice() method can remove specific index of data*/
friendName.splice(0,4);
console.log(friendName);
/*splice() acts two types function when frist arg zero one kind and not zero another kind*/
var fdNames = ["Eshan", "Ahad", "Tutul", "Hasibul", "Tipu", "Radit"];
fdNames.splice(1,3, "Eshan Ahmad Ahad", "Harunur Rashid", "Hasan");
console.log(fdNames);
