/**
 * @file Problem2LinearSearch1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Simple linear search algorithm
 * @version 0.1
 * @date 2023-04-21
 * @since FriDay; 09:25 AM
 * @copyright Copyright (c) 2023
 * @institute: Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
linearSearch = (arrayList, key) =>{
    const length = arrayList.length; /*For performanse optimization*/
    for(let i = 0; i < length; i++){
        if(arrayList[i] === key){
            return i;
        }
    }
    return "NotFound!";
}
const arrayList = ['a', 'b', 'c', 'd', 'c'];

console.log(linearSearch(arrayList, 'c'));