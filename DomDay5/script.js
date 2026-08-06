const card=document.getElementById("card1");
const div=document.querySelectorAll("div")
const button=document.querySelector("button")
button.addEventListener("click",(event)=>{
    console.log(event.target.parentElement)

})

card.addEventListener("click",(event)=>{
    console.log(event.target.parentElement)
   console.log( event.target.children)

})


div.forEach((item)=>{

item.addEventListener("click",(e)=>{
    console.log(item.innerHTML)
    console.log(item.children[0])
})

})

// console.log(card.parentElement,"parent Ekement")