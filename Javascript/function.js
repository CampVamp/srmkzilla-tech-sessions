const lower = require('./lowercase')

let text = "AjAy";

console.log("Lowercase from lowercase.js : ",lower(text));


function toUppercase(text){
    console.log("Text from Classic Function : ",text.toUpperCase());
}

let textfromarrow = (text)=>{
    console.log("Text from Arrow function : ",text.toUpperCase());
}

toUppercase(text);
textfromarrow(text);
// console.log("Text from Arrow Function : ",textfromarrow);
