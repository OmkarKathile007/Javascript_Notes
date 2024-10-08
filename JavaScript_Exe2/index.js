//1 ) Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.


// function greet(a){
//     let msg=`Hey Good Morning ,
//      ${a} ! How are You ? `;

//      console.log(msg)

// }

// greet("Omkar");





// 2) Write a function called 'getSquare' that takes a number parameter and returns its square.

// function square(a){
//     let sq=a**2;
//     return sq;
// }

// console.log(square(5));






// 3)  Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string


// function countLetters(str){
//     let count={};

//     for(let i=0;i<str.length;i++){

//         let char=str[i];

//         if(count[char]){
//             count[char]++;
//         }
//         else{
//             count[char]=1;
//         }
//     }

//     return count;
    
// }

// console.log(countLetters("WebDevelopment"));





//  4)  Write a function called 'createCounter' that returns a function.
//  The returned function should increment a counter variable each time it is called and return the current count

// function increment(){
//     let count=0;

//     return function(){
//         count=count+1;
//         return count;
//     };
    
// }

// let counter=increment();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());




// 5) Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and
//  returns the sum of all even numbers in the array.
 
// function sumEvenNumbers(arr1){
//     let sum=0;
    
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]%2===0){
//             sum+=arr1[i];
//         }
//     }

//     return sum;
// }

// let arr=[1,2,3,4,5,6,7,8];
// console.log(sumEvenNumbers(arr));


//6) Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array


// function SumArray(a){
//     let sum=0;
//     for(let i=0;i<a.length;i++){
//        sum+=a[i];
//     }

//     return sum;
// }

// let arr=[1,2,3,4,5];
// ;
// console.log(SumArray(arr));




// 7) Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

// function ValidLength(arr){

//     let v=[]
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length>5){
//             v.push(arr[i]);
//         }
//     }

//     return v;
// }


// let strlen=["omkar","shravan","jyotam","sharva","swaraj","sharan","hari","pravin","omkarbhaiya","annirudha","12345","lengt"]

// console.log(ValidLength(strlen))




// 8)  Write a function that takes an object and returns an array of all the keys in the object.

// let obj1={
//     a:5,
//     b:6,
//     c:7,
//     d:8,
//     e:9,
//     f:10
// }


// function getkeys(obj1){
//     let obj=Object.keys(obj1);

//     return obj;

    
// }

// console.log(getkeys(obj1))





// 9) Write a function that takes an array of objects and returns an array of all the values of a specified property name.

// let a={a:6,b:7,c:9,d:10};
// let b={};
// let c={};
// let d={};

// let objArr=[a,b,c,d];

// function ObjArrayValues(a,i){

//     // let ob=Object.values(a[i]);
//     let ob1=a.map((obj)=>ob[i])

//     return ob1;

// }

// console.log(ObjArrayValues(objArr,0));




// 10) Write a function that takes an array of objects and returns the object with the highest value for a specified property name.


let values=[
    {name:"Omkar",marks:95},
    {name:"abc",marks:89},
    {name :"xyz",marks:90},
    {name:"ok",marks:98},
    {name:"ok1",marks:99}
];

function Check(a,n){
  let maxobj=a[0];

  for(let i=1;i<a.length;i++){

    if(a[i][n]>maxobj[n]){
        maxobj=a[i];
    }

    
  }

  return maxobj;
}

console.log(Check(values,"marks"));






