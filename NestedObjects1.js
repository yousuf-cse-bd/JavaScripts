/**
 * @file NestedObjects1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief You can access nested objects using the dot notation or the bracket notation
 * @version 0.1
 * @date 2023-05-08
 * @since MonDay; 06:57 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

/*Values is an object can be another object*/
const myObject = {
    name: 'John',
    age: 30,
    cars: {
        car1: 'Ford',
        car2: 'BMW',
        car3: 'Fiat'
    }
};

/*You can access nested objects using the dot notation or the bracket notation*/
console.log(myObject.cars.car1);
console.log(myObject.cars['car2']);
console.log(myObject['cars']['car3']);