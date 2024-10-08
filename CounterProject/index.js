const Value=document.querySelector('.counter');

let increment=()=>{
    let update=parseInt(Value.innerHTML);
    update=update+1;
    Value.innerHTML=update;
}


let decrement=()=>{
    let update=parseInt(Value.innerHTML);
    update=update-1;
    Value.innerHTML=update;
}