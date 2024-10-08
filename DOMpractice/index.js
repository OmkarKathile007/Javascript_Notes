



// const t1=performance.now();

//  for(let i=1;i<=100;i++){
//     let ele=document.createElement('p');

//     ele.textContent='This is a Para Class '+i;

//     document.body.appendChild(ele);
//  }
//  const t2=performance.now();
//  console.log('first-Code time Exection is : '+t2-t1);





//  const t3=performance.now();
// let myDiv=document.querySelector('#wrapper');

// function MyPara(){
//   console.log('Para Element get Executed');
// }

// for(let i=1;i<=50;i++){
//       let element=document.createElement('p');

//       element.textContent='This is Para no : '+i;

//     //   element.addEventListener('click',MyPara());

//       myDiv.appendChild(element);
// }


// document.body.appendChild(myDiv);

// const t4=performance.now();
// console.log('Second-Code time Exection is : '+t4-t3);



/// apply method

let person={
  fullname:function(){
    return this.firstname+" "+this.lastname;
  }
}

const person1={
  firstname:"Omkar",
  lastname:"Kathile"

}
 
console.log(person.fullname.apply(person1));
 
