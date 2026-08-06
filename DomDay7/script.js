

const btn= document.querySelector("button")
const logout=document.querySelector("#log")
btn.addEventListener("click",()=>{

// response
let res={
    "user":"Akarsh",
    "id":"jhgfd3545ihjnb3w7tf",
    "accessTokendata":"lkjghfdxzxfcghj3.utygdgcfhgjj.jhfghyuoipkj.iuygf",
    "admin":false
}


localStorage.setItem("data",JSON.stringify(res));
localStorage.setItem("profile",res.user)

})


logout.addEventListener("click",()=>{
    localStorage.clear();
    
})