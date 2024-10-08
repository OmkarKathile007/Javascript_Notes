




let Div=document.querySelectorAll('a');

let thirdLink=Div[2];



thirdLink.addEventListener('click',function(event){

    event.preventDefault(); //Current Behaviour of anchor tag is Prevented
    console.log('Cannot Open Prevent Methods ');
})


let myDiv=document.querySelector('#wrapper');

function MyPara(){
  console.log('Para Element get Executed');
}

for(let i=1;i<=50;i++){
      let element=document.createElement('p');

      element.textContent='This is Para no : '+i;

    //   element.addEventListener('click',MyPara());

      myDiv.appendChild('element');
}

document.body.appendChild(myDiv);