/**
 * @file ForInLoop1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief The for-in statement loop through the properties of an object
 * @version 0.1
 * @date 2023-04-11
 * @since TuesDay; 06:32 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const person = {fName: "Yousuf", lName: "Ali", age: 26};
for(const x in person){ /*var, let, const supported*/
    console.log(x); /*Object properties*/
}
console.log("------------------------------------");

for(const x in person){ /*var, let, const supported*/
    console.log(person[x]);/*Object value*/
}
console.log("------------------------------------");
/**
 * Do not use FOR-IN over a Array if the index ORDER is important.
 * The index order is implementation-dependent, and array values may not be 
 *  accessed in the order you expect.
 * It is better to use a FOR-Loop, a For Of Loop, or Array.forEach() when
 *  the order you expect.
 */
const numbers = [45, 4, 9, 16, 25];
for(const num in numbers){ /*var, let, const supported*/
    console.log(num);
}


