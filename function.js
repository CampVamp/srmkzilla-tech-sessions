let text = "ajay";

function toUppercase(text){
    console.log("Text from Classic Function : ",text.toUpperCase());
}

let textfromarrow = (text)=>{
    console.log("Text from Arrow function : ",text.toUpperCase());
}

toUppercase(text);
textfromarrow(text);
// console.log("Text from Arrow Function : ",textfromarrow);
