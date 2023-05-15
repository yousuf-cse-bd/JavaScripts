/**
 * @file FlipString1.js
 * @author: Md. Yousuf Ali (yousuf.cse17@gmail.com)
 * @brief Flip string: lower case to upper case and vice versa 
 * @version 0.1
 * @date 2023-05-16
 * @since TuesDay; 02:45 AM
 * @copyright Copyright (c) 2023
 * @institute Dept. of CSE, Varendra University, Rajshahi, Bangladesh
 */

const stringLine = "abcdeABCDE";
console.log(`Given string: ${stringLine}`);

const isUpper = letter =>{
    if(letter >= 'A' && letter <= 'Z'){
        return true;
    }
    else{
        return false;
    }
}

const isLower = letter => {
    if(letter >= 'a' && letter <= 'z'){
        return true;
    }
    else{
        return false;
    }
}

const toFlipString = stringLine =>{
    let flipedString = '';
    for(let x of stringLine){
        if(isLower(x)){
            flipedString += x.toUpperCase();
        }
        else if(isUpper(x)){
            flipedString += x.toLowerCase();
        }
    }
    console.log(`Fliped string: ${flipedString}`);
}

toFlipString(stringLine);

