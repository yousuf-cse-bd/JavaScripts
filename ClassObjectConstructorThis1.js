/**
 * @file ClassObjectConstructorThis1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Class, object, constructor & method 
 * @version 0.1
 * @date 2023-06-15
 * @since ThursDay; 08:05 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
class Person{
    /*Class member variables */
    name;
    email;
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    /*Class member method*/
    showData = () =>{
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}

const p1 = new Person("Person1", "person1@test.com");
p1.showData();

console.log(p1);
console.log("-------------------------------------------");

const p2 = new Person("Person2", "person2@test.com");
p2.showData();

const p3 = p2; /*Copy constructor*/
p3.showData();
