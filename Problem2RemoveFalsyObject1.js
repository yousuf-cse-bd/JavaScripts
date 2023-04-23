/**
 * @file Problem2RemoveFalsyObject1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Remove falsye elements from mixed-object
 * @version 0.1
 * @date 2023-04-23
 * @since SunDay; 11:15 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const object = {
    a: "lws",
    b: undefined,
    c: "Learn with Sumit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Tanks All",
    k: NaN
};

const solidObject = function(object){
    for(let i in object){ /*Provided key*/
        if(!object[i]){
            delete object[i];
        }
    }
    return object;
}

console.log(solidObject(object));