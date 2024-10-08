





// let content=document.querySelectorAll('a');

// let secondLink=content[1];


// //  event.preventDefault();  ==> This method Prevent the Behaviour of Anchor Tag

// secondLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Nothing Happen');
// })





/////////////////////////>


// let mydiv=document.createElement('div');
// function mybody(event){
//     console.log('Clicked Success '+event.target.textContent);
// }

// mydiv.addEventListener('click',mybody);


// for(let i=1;i<=50;i++){
//     let newEle=document.createElement('p');
//     newEle.textContent='This is Para Class : '+i;

//     mydiv.appendChild(newEle);
// }

// document.body.appendChild(mydiv);






///////////////////////////>     When we click on span Only then Only it will get Executed

let content=document.querySelector('#wrapper');

content.addEventListener('click',function(event){

    if(event.target.nodeName==='SPAN'){
        console.log('My name Printed :'+event.target.textContent);
    }
    
})

