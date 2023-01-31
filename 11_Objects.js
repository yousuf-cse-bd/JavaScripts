/**
 * @file 11_Objects.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief JavaScripts special feature
 * @version: 0.1
 * @date 2023-01-31
 * @since TuesDay; 04:46 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
var myInfo = {name: "Muhammad Yousuf Ali", age: 26, id: 171311101};
console.log(typeof myInfo);

console.log("Name: ",myInfo.name);

function PersonInfo(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
}

var alMurshid = new PersonInfo("AlMurshid", 26, 171311105);
console.log(typeof alMurshid);
console.log(alMurshid.name);
delete alMurshid;

function PersonInfo1(name, id, age, department){
    this.name = name;
    this.id = id;
    this.age = age;
    this.department = department;
    this.showMe = function(){ /*This is a anonymous functions*/
        console.log(this.name);
        console.log(this.id);
        console.log(this.age);
        console.log(this.department);
    }
}

console.log('-----------------------------------------------------');

var mustafeez = new PersonInfo1("Mustafeez", 171311103, 25, 'CSE');
mustafeez.showMe();
delete mustafeez;

console.log('-----------------------------------------------------');

var israt = new PersonInfo1("Israt Jahan", 171311098, 26, 'CSE');
israt.showMe();
delete israt;