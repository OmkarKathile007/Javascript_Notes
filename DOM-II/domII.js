/// Remove Event Listener

// function check(){
//     console.log("Function Deleted !");
// }

// document.addEventListener('click',check);

// document.removeEventListener('click',check);



/// To print Event Data

// let content=document.querySelector("#wrapper");

// content.addEventListener('click',function(event){
//     console.log(event);
// });













// const a = performance.now();
// for(let i=1;i<=100;i++){

//    let content=document.createElement('p');

//     content.textContent='This is a Para  '+i;

//    document.body.appendChild(content);
// }

// const b = performance.now();

// console.log('Time Taken for the Execution of the Program '+(b-a));


// /////////////////////////> Efficient Code Optimization

// let mydiv=document.createElement('div');
// document.body.appendChild(mydiv);

// const a1=performance.now();

// for(let i=1;i<=100;i++ ){
      
//     let c=document.createElement('p');

//      c.textContent='This is Para '+i;

//     mydiv.appendChild(c);
    
// }
// // document.body.appendChild(mydiv);
// const a2 = performance.now();

// console.log('Time Taken for the Execution of the Program '+(a2-a1));




// /////////////////////////////> Using Document Fragmentation


// let fragment=document.createDocumentFragment('div');
// const a3=performance.now();
// for(let i=1;i<=100;i++){
//     let element=document.createElement('p');
//     element.textContent='Js is Single Threaded';

//     fragment.appendChild(element);
// }

// document.body.appendChild(fragment);

// const a4 = performance.now();

// console.log('Time Taken for the Execution of the Program of Fragmentation : '+(a4-a3));







/////////////////////////////>Single Thread JS

// function a(){
//     console.log('Function A executed');
// }

// function b(){
//     console.log('Function A executed');
// }


// a();   /////////> Function executes run-time-completion  and only execute program lines by lines by call stack
// b();






/////////////////////////////> SetTime Out   -> It is not necesssary that method gets executes after 5000 ms beacuse it is gone into the event loop


// setTimeout(function(){
//     console.log('Method Executes Success');
// },5000);


let p =new Promise((reject,resolve)=>{

    console.log("Creating Promise : ")
    resolve(123);
     reject((new Error("Error in code handling")))
     

});

p.then(value=>{
    console.log("Success"+value)
}).catch(error=>{
    console.log('Error : ',error.message)
})

