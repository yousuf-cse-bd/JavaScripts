/**
 * @file Problem1CountVowels.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Count vowels from a sentence
 * @version 0.1
 * @date 2023-04-05
 * @since WednesDay; 05:30 PM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value, index, array){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}

console.log(countVowels("I love Bangladesh"));
