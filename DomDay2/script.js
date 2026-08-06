
// // // const para=document.createElement("p");
// // // para.innerText="This para has been added by default";
// // // // document.body.append(para)
// // // const head2=document.createElement("h2")
// // // head2.innerText="second heading"
// // // const container2=document.querySelector("div");
// // // // container2.append(para,head2)
// // // container2.appendChild(para)
// // // // container2.style.width="200px";
// // // // container2.style.height="200px";
// // // // container2.style.backgroundColor="lightGrey";
// // // container2.setAttribute("id","card1")
// // // container2.setAttribute("style","width:200px; height:200px;");
// // // console.log(container2.getAttribute("id"))
// // // console.log(container2.getAttribute("style"))
// // // // container2.className="active"
// // // // container2.className="dark"
// // // // container2.setAttribute("class","active")
// // // // container2.setAttribute("class","dark")

// // // container2.classList.add("active")
// // // container2.classList.add("dark")
// // // container2.classList.add("container2")
// // // container2.classList.remove("active")

// // // console.log(container2.classList.contains("dark"))

// // // //  const para=document.createElement("p");
// // // // para.textContent="This para has been added by default";
// // // // document.body.append(para)
// // // // const container=document.querySelector("div");

// // // // // container.append(para)
// // // // container.innerHTML="<p> This para has been added by default </p> "


// // // // const container2=document.querySelector("div");
// // // // // container2.innerText="<script> alert('hello')</script>"
// // // // console.log(container2.innerText,"----inner text---")
// // // // console.log(container2.textContent,"---text content ---")
// // // // console.log(container2.innerHTML,"---inner html----")

// // const btn=document.getElementById("click");


// // // btn.onclick=function(){
// // //     console.log("button click")
// // // }

// // function BtnCLick1(){
// //  const div=document.createElement("p");
// //  div.innerText="Hello im created by btn click 1"
// //  document.body.append(div)
// // }

// // function BtnCLick2(){
// //     console.log("jiddi function2")
// // }

// // // btn.onclick=BtnCLick1;
// // // btn.onclick=BtnCLick2;
// // btn.addEventListener("click",BtnCLick1)
// // btn.addEventListener("click",BtnCLick2)





// const count=document.getElementById("counter")
// const INC=document.getElementById("inc")

// let state=0;
// count.append(state)
// INC.addEventListener("click",()=>{
//     state+=1;
//     count.innerText=state
// })


// const Dec=document.getElementById("dec")

// Dec.addEventListener("click",()=>{
//     state-=1;
//     count.innerText=state
// })

// const res=document.getElementById("res")

// res.addEventListener("click",()=>{
//     state=0
//     count.innerText=state
// })


// const toggle= document.getElementById("toggle");
// let flag=false;
// toggle.addEventListener("click",()=>{


// if(!flag){
//     document.body.style.backgroundColor="black";
//     document.body.style.color="white";
//     flag=true;
// }


// })

const btns=document.querySelectorAll("button");

console.log(btns)

btns.forEach((item)=>{
    console.log(item,"items of btn")
    item.addEventListener("click",()=>{
        console.log("btn is clicked",item.getAttribute("id"))


        
    })
})