const inputName=document.getElementById("name");
const submitBtn=document.getElementById("submit");
const showName=document.getElementById("showName");
console.log(inputName)
inputName.value=""
submitBtn.addEventListener("click",()=>{
    console.log(inputName.value)
    showName.append(inputName.value);
    //  showName.append("23454543");
    //   showName.append("huytrd");
});

