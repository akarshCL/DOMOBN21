const mainTask = document.getElementById("main_task");
const submitBtn = document.getElementById("btn");
const wrapper = document.getElementById("main_container_wraper");

// Create Main Card
submitBtn.addEventListener("click", () => {

    const title = mainTask.value.trim();

    if (title === "") {
        alert("Please enter a task");
        return;
    }

    // Main Card
    const card = document.createElement("div");
    card.className = "card";

    // ---------------- Header ----------------

    const header = document.createElement("div");
    header.className = "card-header";

    const heading = document.createElement("h2");
    heading.innerText = title;

    const addBtn = document.createElement("button");
    addBtn.innerText = "Add Task";

    header.appendChild(heading);
    header.appendChild(addBtn);

    // ---------------- Task Container ----------------

    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    // ---------------- Delete Card Button ----------------

    const deleteCardBtn = document.createElement("button");
    deleteCardBtn.innerText = "Delete Card";

    // Append all
    card.appendChild(header);
    card.appendChild(taskContainer);
    card.appendChild(deleteCardBtn);

    wrapper.appendChild(card);

    mainTask.value = "";

    // ================= Delete Card =================

    deleteCardBtn.addEventListener("click", () => {
        const confirmDelete = confirm("Delete this complete card?");
        if (confirmDelete) {
            card.remove();
        }
    });

    // ================= Add Child Task =================

    addBtn.addEventListener("click", () => {

        const taskName = prompt("Enter Task");

        if (taskName === null || taskName.trim() === "") {
            return;
        }

        createTask(taskName.trim(), taskContainer);

    });

});

// =======================================================
// Function to Create Child Task
// =======================================================

function createTask(taskName, container) {

    // Main Task Row
    const task = document.createElement("div");
    task.className = "task";

    // Left Side
    const left = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.innerText = taskName;

    left.appendChild(checkbox);
    left.appendChild(text);

    // Right Side
    const right = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    right.appendChild(editBtn);
    right.appendChild(deleteBtn);

    task.appendChild(left);
    task.appendChild(right);

    container.appendChild(task);

    // ==========================================
    // Complete Task
    // ==========================================

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
            text.style.color = "gray";
        } else {
            text.style.textDecoration = "none";
            text.style.color = "black";
        }

    });

    // ==========================================
    // Edit Task
    // ==========================================

    editBtn.addEventListener("click", () => {

        const updatedTask = prompt("Update Task", text.innerText);

        if (updatedTask === null) {
            return;
        }

        if (updatedTask.trim() === "") {
            alert("Task cannot be empty.");
            return;
        }

        text.innerText = updatedTask.trim();

    });

    // ==========================================
    // Delete Task
    // ==========================================

    deleteBtn.addEventListener("click", () => {

        const confirmDelete = confirm("Delete this task?");

        if (confirmDelete) {
            task.remove();
        }

    });

}