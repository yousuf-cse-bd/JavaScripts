/**
 * @file NestedArraysAndObject1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief To access arrays inside arrays, use a for-in loop for each array
 * @version 0.1
 * @date 2023-05-13
 * @since MonDay; 06:57 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const myObject = {
    named: 'John',
    age: 30,
    cars: [
        {named: 'Ford', models:["Fiesta", 'Focus', "Mustang"]},
        {named: 'BMW', model: ["320", "X3", "X5"]},
        {named: "Fiat", model: ["500", "Panda"]}
    ]
};

for(const i in myObject.cars){
    for(const j in myObject.cars[i].model){
        console.log(myObject.cars[i].model[j]);
    }
}