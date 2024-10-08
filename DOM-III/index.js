

///////////////////////> Promise 

let p = new Promise(function(resolve,reject){


     console.log('Promise Solve Success');
    //  resolve(112);

     reject(new Error("Error Running in Code"));
});

// console.log(p);
// 
// p.then(value=>{
//     console.log('Success');
// })

p.catch(new Error("Error Message"));






//////////////////////> Promise catch()

// let p1= new Promise((resolve, reject) => {
    
//     setTimeout(function(){
//         console.log(" Your are Not Allowed ");
//     },2000)

//     reject();
// })

// p1.catch((value)=>console.log('Rejected !'));





//////////////////////> Promise then()

// let p2=new Promise((resolve, reject) => {
    
//     setTimeout(function(){
//         console.log("Yes Your Problem has been Resolved");
//     },3000)

//     resolve();
    
// })

// p2.then((value)=>console.log("Resolved Success !"))





//////////////////////////>  Promise then() ans then()

// let output=new Promise(function(resolve,reject){

//      setTimeout(function(){
//            console.log('Promise Fulfilles Success')
//      },3000);
//     resolve(true);
    
// })


// let w=output.then(() => {
//     let value=new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('setTimeOut Method Executed')
//         },3000);

//         resolve("Value resolved success");
//     })
//     return value;
// })


// w.then((value)=>console.log(value));









///////////////////////////> Promise() async await




// async function utility(){


//     let p1 = new Promise((resolve,reject)=>{

//         setTimeout (()=>{
//             resolve('Method1 Executed Success');
//         },2000)
    
//     })

//     let p2= new Promise((resolve,reject)=>{

//         setTimeout (()=>{
//             resolve('Method2 Executes Success');
//         },3000)
//     })


//     let pr1=await p1;  //> it will wait until p1 get executed fully    without use both will executing parellely
//     let pr2=await p2;
//     return [pr1,pr2];
// }

// utility().then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error(error);
// });



////////////////////////////////////////> Fetch()-> API


// let obj={
//     heading:"Heading"
// };

// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output=await content.json();
//     console.log(output);
// }

// utility();





///////////////////////////////> 
// console.log(JSON.stringify({val:55})); //////->     Convert js Function into String




///////////////////////>    Closure Function()

// function outer(){

//     let name = "OMkar"
//     function inner(){
//         console.log(name);
//     }

//     return inner;

    
// }
// let a=outer();   /// the name fuction scope gets destroyes because of which reference get pass of name 
// a();



//////> Promise Practice 



// let myPromise=new Promise((resolve,reject)=>{
//     resolve(true);
// })

// let p=new Promise(function(resolve,reject){
    

//     setTimeout(()=>{
//         console.log('Methods Executes Successs')
//     },2000)

//     reject(new Error("Message Error Catched !!"));
// })

// p.catch((value)=>{console.log('Methods Executes Success')});




// myPromise.then((value)=>console.log('My name is Omkar Printed in (then) Success !!'))






/// This is Promise Function



// let op=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("Method Executed Success");
//     },2000);
//     reject(2000);

// })


// op.then(()=>{
//     console.log("Yoo HOO");
// });

// op.catch(()=>{
//     console.log("No NO");
// })



async  function abcd(){
   return 8;
}



async function utility(){
    

    let D=new Promise((resolve,reject)=>{
        //   console.log("Omkar Op in the Chat");

        setTimeout(()=>{
            resolve("New Message");
        },1000)
    })

    let F=new Promise((resolve,reject)=>{
        resolve("Omkar Op in the Chat");
    },2000);


    let opD= await D;
    let opF= F;

    return [opD,opF];
}




async function op(){
    let op=await fetch('https://catfact.ninja/fact');
    let content=await op.json();

    console.log(content);
    // console.log(op);
}




















