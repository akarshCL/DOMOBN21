// // let obj={
// //     tagName:"H1",
// //     textContent:"Hello"
// // }

// // obj.tagName="H2";

// // console.log(obj)

// // const head1=document.getElementsByName("h1")
// const head1=document.getElementById("head1");
// head1.innerText="How are You"
// // console.log(head1.innerText,"ggg")
// // console.log(head1,"heade")

// // console.log(window,"window")
// const tagByclassName=document.getElementsByClassName("className2");
// // console.log(tagByclassName[0].innerText,"-----content part----")
// tagByclassName[0].innerText="Kaushal Has answered"
// // console.log(tagByclassName[0],"tagByclassName")
// // tagByclassName[1].innerHTML=`<p> Hello I am a paragraph </p>`;
// tagByclassName[1].outerHTML=`<p> Hello I am a paragraph </p>`;



// // You have to create a one page in that there will be 2 heading
// // telling about ur ptofile and access them by dom.
// // one heading should be access by tag name and another by classname




const data1= document.querySelector("#head1")
const data2= document.querySelector(".className1")
const data3= document.querySelector("div");

console.log(data1,"data1",">>",data1.innerHTML)
console.log(data2,"data2",">>",data2.innerHTML)
console.log(data3,"data3", ">>",data3.innerHTML)

const byTag= document.getElementsByTagName("div")
console.log(byTag,"before")
const div2=document.createElement("div");
document.body.appendChild(div2)
console.log(byTag,"---By tage Name -- after")



// const data11= document.querySelectorAll("#head1")
const data22= document.querySelectorAll(".className1")
const data33= document.querySelectorAll("div");
console.log(data33,"data33 before", ">>",data33.innerHTML)
const div=document.createElement("div");
div.innerText="I am adding after parsing "
byTag.appendChild(div)



const data4=document.querySelectorAll("div")

console.log(data33, "after")