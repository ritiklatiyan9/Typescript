"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {

     // This method is Problematic and doesnot updates the value of val
   // val.toUpperCase();
   // return val;
}
console.log(getUpper("hello"));
