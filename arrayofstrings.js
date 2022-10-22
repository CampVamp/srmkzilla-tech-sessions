let names = ['Ajay','Balaram','Sami','Roshan','Jebarson','Sanjay','Adeline','Subhikksha','Thrideep','Kousi'];
let hi = "Hi ";

//map
let greet = names.map((name)=>{
    return hi.concat(name);
})

console.log(greet);

//filter
let namefiler = names.filter((name)=>{
    if(name.length<6){
        return name;
    }
})

console.log(namefiler);


//foreach
let modifyarr = names.forEach((item,index,arr)=>{
    if(item == "Ajay"){
        arr[index] = item.concat(" is cool");
    }
    else if(item.length<6){
        arr[index] = item.concat(" is awesome");
    }
    else{
        arr[index] = item.concat(" is handsome");
    }
})

console.log(names);