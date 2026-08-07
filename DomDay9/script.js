// // const abc=document.getElementById("abc")

// // // abc.addEventListener("click",(e)=>{



// // // })

// const search= document.getElementById("search");

// // search.addEventListener("keydown",(e)=>{
// //     console.log(e.key,"data")
// //     if(e.key=="ArrowDown"){
// //         console.log("move downwards")
// //     }else if(e.key=="ArrowUp"){
// //         console.log("it shgould move upward")
// //     }else if(e.key==="Enter"){
// //    console.log("Enter that means form has been submitted")
// //    alert("Im trying to submit this form are you sure with the data")
// //     }else if(e.key==="Escape"){
// //         console.log("modal closed")
// //     }
// //     // console.log("key been has been pressed down")
// // });


// // search.addEventListener("keypress",(e)=>{

// //     console.log(e.key,"from keypress")
// // })


// // search.addEventListener("keyup",()=>{
// //     console.log("key been has been pressed up")
// // })



// search.addEventListener("keydown",(e)=>{
// console.log(e)
//     console.log(e.key)// kaunsi key press hua
//     // console.log(e.code)// kounsa keyboard mei btn btn that will show u in the form a=> keyA
//     // console.log(e.target)// gives u the element targeted aur fired the event
//     // console.log(e.target.value)// this one give u the value
//     //  console.log(e.target.id)// this will give u a targeted ID
//     //  console.log(e.timeStamp)// this will give u a time when eb=vent was performed

//     console.log(e.shiftKey,"it will give u a bollean value",e.key)

//     // console.log(e.ctrlKey,e.key)
//     console.log(e.getModifierState("CapsLock"),"MY CAPSLOCKIS ON")

// })


const box=document.getElementById("box");
let drag=false;

box.addEventListener("mousedown",()=>{
    drag=true;
    // console.log("mouse down has been applied")
})



document.addEventListener("mouseup",()=>{
    drag=false;
    // console.log("mouse up has been applied")
})



document.addEventListener("mousemove",(e)=>{
    // console.log("mouse move has been applied")
console.log(e.pageX,e.pageY)
    if(drag){
        box.style.left= "1000px"
        box.style.top= "1000px"
    }
})

