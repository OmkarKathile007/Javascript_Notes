//  1 ) Write a function that takes two numbers as arguments and returns their sum.

// function sum( a , b){
//     return a+b;
// }

// console.log(sum(5,7));





// 2)  Write a function that takes a string as an argument and returns its length.

// function len(a){
//     return a.length;
// }

// console.log(len("op omkaer k"));





// 3) Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// let a = 5;
// let b = 10;

// function sum(a,b){
//     let add=a+b;
//     return add;
// }

// function difference(a,b){
//     let sub=a-b;
//     return Math.abs(sub);
// }

// function product(a,b){
//     let mul=a*b;
//     return mul; ;
// }

// function quotient(a,b){
//     let div=a/b;
//     return div;
// }

// console.log("Sum of Two Number : "+sum(a,b))
// console.log("Diff between two Number : "+difference(a,b))
// console.log("Product of two Number  : "+product(a,b))
// console.log("Quotient of two Number : "+quotient(a,b))




// 4) Write a function that takes two numbers as arguments and returns the larger number 


// function greatestInteger(a,b){
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }

// console.log(greatestInteger(5,8));




// 5)  Write a program that displays a string in reverse order.

// let str="RAKMO";

// for(let i=str.length-1;i>=0;i--){
//     console.log(str[i]+"")
// }

// const rev=str.split("").reverse().join("");
// console.log(rev)




// 6) Write a program that takes a number and checks whether it is positive, negative, or zero.

// function CheckNumber(a){

//     if(a==0){
//         console.log("Zero");
//     }
//     else if(a>0){
//         console.log("Positive");
//     }
//     else {
//         console.log("Negative");
//     }
// }

// CheckNumber(3);
// CheckNumber(-4);
// CheckNumber(0);


// 7) Write a program that takes a number and prints the multiplication table for that number

// function MuLTable(a){
//     for(let i=1;i<=10;i++){
//      console.log(a+" x "+ i +" = "+a*i);
//     }
// }

// MuLTable(10);






// 8) Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function CalculateSumToNumber(a){
//     let sum=0;
//     for(let i=1;i<=a;i++){
//       sum=sum+i;
//     }
//     console.log(sum)
// }

// CalculateSumToNumber(7);





// 9) Write a program that takes a string and prints out the number of vowels in the string

// function CheckstrContVowels(str){
//     let vowels=["a","e","i","o","u"];
//     let count=0;
//     for(let i =0;i<str.length;i++){
//         if(vowels.includes((str[i]).toLowerCase())){
//             count++;
//         }
//     }

//     console.log(count);
// }

// CheckstrContVowels("AEIOU");




// 10)  Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.


// function CheckCommon(arr1,arr2){
//     let commonElements=[];

//    for(let i=0;i<arr1.length;i++){
      
//       if(arr1.includes(arr2[i])){
//          if(!commonElements.includes(arr1)){
//             commonElements.push(arr1[i]);
//          }
//       }
//    }

//    commonElements.sort((a,b)=>a-b);

//    return commonElements;


// }

// let arr1=[1,2,3,4,5];
// let arr2=[3,4,5,6,7];

// console.log(CheckCommon(arr1,arr2));


