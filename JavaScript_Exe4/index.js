



// Write a function that returns a promise which resolves after a specified number of milliseconds.


//  function op(){
    

//     let pro=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Msg Op ');
//         },2000)

//         resolve(500);
//     });

//     return pro;

//     // let p1=new Promise((resolve,reject)=>{

//     // })
// }





//Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds


 function op(millisecond){
    

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log('Msg Op ');
            reject(new Error());
        },millisecond)

        
    });

    // return pro;
}

op(2000).catch((error)=>{
    console.log('2 second wait' ,error);
})




