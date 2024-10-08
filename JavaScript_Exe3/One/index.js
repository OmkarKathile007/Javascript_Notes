/// Write a function to change the text of a button on the click event.

function clickBtn(){
let name=document.querySelector('.Button');

    if(name.textContent==="ClickedMe"){
      name.textContent="Clicked !";
    }
    else{
      name.textContent="ClickedMe";
      // name.body.color=red;
    }

}


//Write a function to add a CSS class to an element on the mouseover event.

function Zoom(x){
  x.style.height="200px";
  x.style.width="200px";
}

function normalImg(x){
  x.style.height="50px";
  x.style.width="50px";

}


//Write a function to remove a CSS class from an element on scroll event.


// Function to remove a CSS class from an element on scroll event
function removeClassOnScroll(element, className) {
  // Add scroll event listener to the window object
  window.addEventListener("scroll", function() {
    // Check if the element has the specified class name
    if (element.classList.contains(className)) {
      // Remove the class name from the element
      element.classList.remove(className);
    }
  });
}

// Test case 1
const box1 = document.querySelector("#box1");
removeClassOnScroll(box1, "highlight");

// Test case 2
// const box2 = document.querySelector("#box2");
// removeClassOnScroll(box2, "active");


// Write a function to toggle the display of a div element on click event.

function Toggle(){

  alert('The Toggle event Occurred !!');

}


function toggleDisplay(divId){
  const div= document.getElementById(divId);

  if(div.style.display==="none"){
    div.style.display="block";
  }
  else{
    div.style.display="none";
  }
}






