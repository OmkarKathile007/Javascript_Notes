



// let a= { 
// //    b:56,
// //   h:24,

// //   area:function(){
// //     console.log("Area of the Rectangle : " ,b*h)
// //   }


  
// // }



// // a.area();

// // function message(){
// //    console.log("Function Call SuccesFully Launched ")
// // }

// // message();


// // console.log("Access the Function Success : ");

// function createRectangle(length,breadth){

//     return rectangle={
//      length:length,
//      breadth:breadth,

//      area(){
//         console.log("Area of Rectangle : ",length*breadth)
//      }

//     }


//     }

//     let obj=createRectangle(3,5);
//    obj.area();
    

function Rectangle(){
    this.length=23;
    this.breadth=24;

    this.area=function(){
        console.log("Area of the Rectangle : ",this.length*this.breadth)
    }
}

let obj1=new Rectangle();
console.log(obj1);
obj1.area();




function takeChai(){
    
    this.milk=4;
    this.tea=40;

    this.haveit=function(){
        console.log("Wow tasty !");
    }
    
}

let fotya=new takeChai();
console.log(fotya);
fotya.haveit();


function CreateCar(){
    return lamborghini={
        price:4,color:"black",

        drive:function(){
            console.log("Dream Achieve Success !");
        }

    }
}

let omkar = CreateCar();
omkar.drive();