

document.addEventListener('click',function(){
    console.log('Clicked on screen');
});



let content=document.querySelector('a');
let secondLink=content[1];

secondLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log(event);
})
