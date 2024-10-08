
//////////////////////>  Function Calling

// function message(){
//     console.log("Message Printed");
// }
// message();







/////////////////////>  Hoisting of Function
/// Hoisting is the Process of Moving function declaration to the top of the of the file automatically by Js Engine
// console.log(sum(5,6));

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }


// let name = sum(1,2,3,4,5,5,6);    // All the Arguments gets Printed key : value Pair
// console.log(name);







/////////////////////>   Named Function Assignment

// let name = function crown(){
//     console.log('King Wons the Battle');
// }

// // name();

// let walk = name;   // Assiging Function to new Variable
// walk();





/////////////////////>    Argument Sum

//  function sum(a,b){
//     total=0;
//     for(let value of arguments){
//          total=total+value;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5,5));





/////////////////////> Anonymous Function

// let stand2=function(){
//     console.log('Yo Anonymous here');
// }

// stand2();






/////////////////////////>   Rest Operator  


// function sum(num,...args){   // args will store rest or arguments till end
//     console.log(args);
// }
// sum(1,2,3,4,4,5,5);





/////////////////////> Default Parameter


// function interest(p,i=1,y=12){    // if we does not define parameter then it will  NaN  defined
//     return p*i*y/100;
// }

// console.log(interest(100,undefined,undefined));




///////////////////////>  Getters Setters and Error Handling

// let person={
//      fName:'Omkar',
//      LName:'Kathile',
//      get fullname(){
//         return `${person.fName} ${person.LName}`;
//      },
//      set fullname(value){
//         // if(typeof value!==String){
//         //     throw new Error('Message Error Has Been Printed');
//         // }
//         let name=value.split('  ');
//         this.fName=part[0];
//         this.LName=part[1];
//      }
// }
// person.fullname='Omkar Kathile';

// // try{
// //     person.fullname=1;
// // }
// // catch(e){
// //     console.log(e);
// // }

// console.log(person.fullname);












/////////////////////////////>   Reduce Function

// Traditional Way for Sum
// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }

// console.log(sum);


// // Using reduce function

// let sum1=arr.reduce((accumulator,currentValue) => accumulator+currentValue,0);  // 0 states that by-default value for accumulator

// console.log(sum1);
