

let omkar={
    name:"ok",
    year:"second year",
    clg:"KJ",
    cetScore:"88.24"
};

let person={};

//object properties get cloned in other object using loop
for(let key in omkar){
    person[key]=omkar[key];
}

console.log(person);
console.log(omkar);


let src={
    a:10,
    b:12,
    c:24
}

// direct cloning object into another 
let dest=Object.assign({},src);
console.log(dest);

// direct cloning2 object into another
console.log("Clone using direct clone")
let a={...dest};
console.log(a);


let shape={
    length:12,
    breadth:15,

};

let rectangle=Object.assign({},shape);
console.log("Properties assign to rectangle success : ",rectangle);


