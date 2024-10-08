//////////////////////> Array Traversal

// let arr=[4,5,6,7,8];
// console.log(arr[2]);


// for(let i=0;i<10;i++){
//     console.log(arr[i]);
// }



/////////////////////> Operation on Array


// // Push Element at End
// arr.push(56);
// console.log(arr);


// // add element at Beginning
// arr.unshift(56);
// console.log(arr);


// // Add to middle
// arr.splice(2,0,"abcd");
// console.log(arr);

// // whether the Element is Present or Not
// console.log(arr.includes(5));

/// Error Handling

// let a=10;
// let b =0;

// try{
//     if(b<=0){
        
//         throw "CHECKED ! ";
//     }
//     else{
//         console.log("Value is : ",a/b);
//     }
// }catch(err){
//     console.log("Error Handeld");
// }





///////////////////////////>Array Objects

// let obj={
//     {no:12,name:'Omkar'};
//     {no:12,surname:"Kathile"};

// }

// let nums=[4,5,6,7,8];

// console.log(nums.indexOf(5));



// let courses=[
//     {no:45,name:"Omkar"},
//     {no:56,name:"XYZ"}
// ]



// let cou = courses=>{
//     return courses.name==='Omkar';
// }
// console.log(cou.name);

// let course=op(()=>{
//       console.log("function Executed")
// })

// course();





/////////////////////> Remove Elements from Array

// let num=[2,3,4,5,6,7];
// num.pop(); //Last remove
// console.log(num);
// num.shift();
// console.log(num);
// let num2=num;
// num.length=0;  //   For making whole arraylength = 0
// num.splice(0,number.length)
// console.log(num2);
// console.log(num);

// Traditional Approach

// while(num.length>0){
//     num.pop();
// }

// console.log(num);






/////////////////////> Combining and Slicing element from Array

// let a =[2,3,4];
// let b =[4,5,6];
// let concate=a.concat(b);

// console.log(concate)


// let slice=concate.slice(2,5);
// concate.slice(4);

// console.log(concate); 


///////////////////////> Concate Using Spread Operator

// let a =[2,3,4];
// let b =[4,5,6];

// let spreadOperatorConcate=[...a,'a',...b,'c'];
// console.log(spreadOperatorConcate);





////////////////////////>Iterating Over Array ForEach Loop

// let arr=[10,20,30,40,50];
// Normal
// arr.forEach(function(number){
//     console.log(number);
// });

//Using Arrow Operator
// arr.forEach(number=>console.log(number));




//////////////////////////> Joining Array 

// Add to every Element

// let num=[10,20,30,40,50];
// const n1=num.join(' $');
// console.log(n1);





/////////////////////////>  Split String and Joined String

// let message='This is My Message';
// let parts=message.split(' ');    
// console.log(parts);



/////////////////////////>  Join String


// let message='This is My Message';
// let message1=message.split(' ');  
// let parts = message1.join('_');      // Joined the Splitted Message 
// console.log(parts);






////////////////////////////> Arrays Sort Function

// let number=[2,7,1,5,0];
// number.sort();
// console.log(number);






///////////////////////////> Filter Array 

// let number=[2,3,4-1,-8,-10];       predicate fun(value)
// let fiilter_function = number.filter(function(value){
//     return value >= 0;    // Filtering according to  Positive  values
//     // return value <=0;    
// })

// console.log(fiilter_function);




//////////////////////////>     Mapping 

// let num=[4,5,6,7,8];
// let num_map=num.map(function(value){
//     return 'Student no :' +value;       // Assigning Particular with that index having Some Kind of Relation
// })

// console.log(num_map);


// num_map=num.map(function(value){
//     return 'Student no: '+value;
// }
   
// )

// console.log(num_map);





/////////////////////////>


// let num=[2,3,4,5,5,-1,0,4];
// let obj=num.filter(value=> value >= 0 ).map(value=> {n1:value})   // First filter  the Values and Map the num(Array) using Objects

// console.log(obj);



// let arr=[2,3,4,5];
// arr.push(2);
// arr.push(23);

// arr.unshift(21);
// console.log(arr);
