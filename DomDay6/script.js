
let currentTaskContainer=null;
let currentCardContainer=null;
const add_main_task_btn = document.getElementById("add_main_task_btn");


const modal = document.getElementsByClassName("modal")
const new_task = document.getElementById("new_task");
const cancel_task_btn = document.getElementById("cancel_task_btn");
const Submit_task_btn = document.getElementById("Submit_task_btn")

const task_wraper = document.getElementById("task_wraper")
//============ modal handling============
let appendContainer=null;



add_main_task_btn.addEventListener("click", () => {
 appendContainer="wrapper";

commonModal("Create Card",appendContainer)
    // modal[0].style.display = "flex"
});


function commonModal(title,appendCardContainer){
console.log(title,appendCardContainer,"kkkk")



}



cancel_task_btn.addEventListener("click", () => {
    modal[0].style.display = "none";
    new_task.value = ""
});

Submit_task_btn.addEventListener("click", () => {
    if (!new_task.value.trim()) {
        alert("please fill the task detail!!");
        return
    }

    switch(currentTaskContainer){
case "wraper":
createCard(new_task.value);
return;

case "taskwraper":
    
    }
    

    modal[0].style.display = "none";
    console.log(new_task.value, "value")
    new_task.value = ""
})

//==========create a new card always with input value===========

function createCard(heading) {


    const main_container_of_task = document.createElement("div");
    main_container_of_task.classList.add("main_container_of_task");

    const task_header = document.createElement("div");
    task_header.classList.add("task_header");
    // == this is for heading
    const task_heading = document.createElement("h2");
    task_heading.classList.add("task_heading");
    task_heading.innerText = heading;
    // ==== this is for btn;
    const createBtn = document.createElement("button")
    createBtn.classList.add("createBtn");
    createBtn.innerText = "Add"


    createBtn.addEventListener("click",(e)=>{
     modal[0].style.display = "flex"


    })
    // append in header;
    task_header.append(task_heading, createBtn)
    const Task_content = document.createElement("div");
    Task_content.classList.add("Task_content")
    const Task_footer = document.createElement("div");
    Task_footer.classList.add("Task_footer");
   const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerText = "Delete"
    Task_footer.append(deleteBtn)
    main_container_of_task.append(task_header, Task_content, Task_footer)
    task_wraper.append(main_container_of_task)
}