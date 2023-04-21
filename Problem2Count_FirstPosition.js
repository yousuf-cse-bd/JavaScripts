/**
 * @file Problem2Count_FirstPosition.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Count a string with frist occured position using regular expression
 * @version 0.1
 * @date 2023-04-20
 * @since FriDay; 08:41 AM
 * @copyright Copyright (c) 2023
 * @institute: Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */
const sentence = "Learn with Sumit is all about teaching web development skills and technologies in an efficient and practical manner. If you are just getting starred in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack tp full stack developer. Learn with Sumit also deep drive into advanced topics using latest best practices for you seasoned web developer.";

const matches = sentence.match(/sumit/gi);/*g:global, i:ignoreCase*/
console.log(matches);

const occurrences = matches? matches.length : 0;
console.log(occurrences);

let firstOccuredPos = sentence.search(/sumit/i);

firstOccuredPos = firstOccuredPos >= 0?firstOccuredPos: "Not found!";
console.log(firstOccuredPos);