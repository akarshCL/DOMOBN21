
let userData={
    name:"",
    email:"",
    phone:"",
    gender:"",
    password:"",
    course:"",
    language:[],
}
const showResult=document.getElementById("showResult")
const formSubmit= document.getElementById("formSubmit");
const errorName=document.getElementById("errorName")
formSubmit.addEventListener("keyword",(event)=>{
    event.preventDefault()
    console.log(event.target,"--complete for--")
console.log(event.target.elements,"---elements--")
let data=event.target.elements;
if(data.name.value){
userData.name=data.name.value;
}else{
 errorName.innerText="Please fill this details"   
}

userData.email=data.email.value;
userData.phone=data.phone.value;
userData.gender=data.gender.value;
userData.password=data.password.value;
userData.course=data.course.value;

event.target.elements.language.forEach((item)=>{
    if(item.checked){
        userData.language.push(item.value)
    }
})

if(!data.name.value|| !data.email.value){
    alert("please fill all details")
}else{
console.log(event.target.elements.language,"ll")
formSubmit.reset();
console.log(userData,"userData")
const headingName=document.createElement("h2")
const headingEmail=document.createElement("h2")
const headingPhone=document.createElement("h2")
const headingGender=document.createElement("h2")
const headingPassword=document.createElement("h2")
const headingCourse=document.createElement("h2")
const headingLang=document.createElement("h2")
headingName.innerText=`Name: ${userData.name}`
headingEmail.innerText=`Email: ${userData.email}`
headingPhone.innerText=`Phone: ${userData.phone}`
headingGender.innerText=`Gender: ${userData.gender}`
headingPassword.innerText=`Password: ${userData.password}`
headingCourse.innerText=`Course: ${userData.course}`
headingLang.innerText=`Language: ${userData.language.join(",")}`
showResult.append(headingName,headingEmail,headingPhone,headingGender,headingPassword,headingCourse,headingLang)
userData={
    name:"",
    email:"",
    phone:"",
    gender:"",
    password:"",
    course:"",
    language:[],
}
}

})



let inputName=document.getElementById("name")
inputName.addEventListener("input",(e)=>{
console.log(e.target.value)
console.log("click")
if(e.target.value){
    errorName.innerText=""
}
})



const students = [
  {
    id: 1,
    name: "Aman",
    age: 22,
    course: "MERN",
    city: "Delhi"
  },
  {
    id: 2,
    name: "Priya",
    age: 21,
    course: "React",
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Rahul",
    age: 23,
    course: "Node.js",
    city: "Bangalore"
  },
  {
    id: 4,
    name: "Sneha",
    age: 20,
    course: "JavaScript",
    city: "Pune"
  },
  {
    id: 5,
    name: "Karan",
    age: 24,
    course: "Full Stack",
    city: "Hyderabad"
  }
];


const data=[
    "java","js","html","css","react",    "java","js","html","css","react",    "java","js","html","css","react",    "java","js","html","css","react"
]


const container=document.getElementById("container");

const ul=document.createElement("ul");

// ul.innerHTML=`<li> Notres</li>
// <li> Notres</li>
// <li> Notres</li>
// <li> Notres</li>
// <li> Notres</li>
// <li> Notres</li>`
// container.append(ul)

//2nd

let temp =data.map((item)=>{
   return (`<li> ${item}</li>`)
})
ul.innerHTML=temp.join(" ")
container.append(ul)


