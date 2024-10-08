const item=document.querySelector('#counter');

let increment=()=>{
    let value=parseInt(item.innerHTML);
    value=value+1;
    item.innerHTML=value;
}

let decrement=()=>{
    let value=parseInt(item.innerHTML);
    value=value-1;
    item.innerHTML=value;
}