// =======================
// Elements
// =======================
let currentTaskText = null;
let currentCheckbox = null;
const wrapper = document.getElementById("main_container_wraper");

const addCardBtn = document.getElementById("btn");

const modal = document.getElementById("modal");
const modalHeading = document.getElementById("modalHeading");
const modalInput = document.getElementById("modalInput");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

// =======================
// Global Variables
// =======================

let mode = "";

let currentTaskContainer = null;

let currentHeading = null;

// =======================
// Open Modal
// =======================

function openModal(title, currentMode, value = "") {

    modalHeading.innerText = title;

    modalInput.value = value;

    mode = currentMode;

    modal.classList.add("show");

    modalInput.focus();

}

// =======================
// Close Modal
// =======================

function closeModal() {

    modal.classList.remove("show");

    modalInput.value = "";

    currentTaskContainer = null;

    currentHeading = null;

}

// =======================
// Cancel Button
// =======================

cancelBtn.addEventListener("click", closeModal);

// =======================
// Close when clicking outside
// =======================

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        closeModal();

    }

});

// =======================
// Add Card Button
// =======================

addCardBtn.addEventListener("click", () => {

    openModal("Create New Card", "addCard");

});

// =======================
// Save Button
// =======================

saveBtn.addEventListener("click", () => {

    const value = modalInput.value.trim();

    if (value === "") {

        alert("Please enter something.");

        return;

    }

    switch (mode) {

        case "addCard":

            createCard(value);

            break;

        case "addTask":

            createTask(value, currentTaskContainer);

            break;

        case "renameCard":

            currentHeading.innerText = value;

            break;

        case "editTask":

        currentTaskText.innerText = value;

        break;

    }

    closeModal();

});

// =======================
// Create Card
// =======================

function createCard(title) {

    // Main Card

    const card = document.createElement("div");

    card.className = "card";

    // ================= Header =================

    const header = document.createElement("div");

    header.className = "card-header";

    const heading = document.createElement("h2");

    heading.innerText = title;

    // Button Container

    const buttonWrapper = document.createElement("div");

    buttonWrapper.className = "buttons";

    // Rename Button

    const renameBtn = document.createElement("button");

    renameBtn.innerText = "Rename";

    renameBtn.className = "rename-btn";

    // Add Task Button

    const addTaskBtn = document.createElement("button");

    addTaskBtn.innerText = "+ Task";

    addTaskBtn.className = "add-task-btn";

    buttonWrapper.append(renameBtn);

    buttonWrapper.append(addTaskBtn);

    header.append(heading, buttonWrapper);

    // ================= Task Container =================

    const taskContainer = document.createElement("div");

    taskContainer.className = "task-container";

    // ================= Delete Card Button =================

    const deleteCardBtn = document.createElement("button");

    deleteCardBtn.innerText = "Delete Card";

    deleteCardBtn.className = "delete-card-btn";

    // ================= Append =================

    card.append(header);

    card.append(taskContainer);

    card.append(deleteCardBtn);

    wrapper.append(card);

    // ================= Rename Card =================

    renameBtn.addEventListener("click", () => {

        currentHeading = heading;

        openModal(

            "Rename Card",

            "renameCard",

            heading.innerText

        );

    });

    // ================= Add Task =================

    addTaskBtn.addEventListener("click", () => {

        currentTaskContainer = taskContainer;

        openModal(

            "Add Task",

            "addTask"

        );

    });

    // ================= Delete Card =================

    deleteCardBtn.addEventListener("click", () => {

        if (confirm("Delete this card?")) {

            card.remove();

        }

    });

}

// =======================
// Create Task
// =======================

function createTask(taskName, container) {

    const task = document.createElement("div");
    task.className = "task";

    // ---------------- Left ----------------

    const left = document.createElement("div");
    left.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.innerText = taskName;

    left.append(checkbox, text);

    // ---------------- Right ----------------

    const right = document.createElement("div");
    right.className = "right";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    right.append(editBtn, deleteBtn);

    task.append(left, right);

    container.append(task);

    // ================= Complete =================

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {

            task.classList.add("completed");

        } else {

            task.classList.remove("completed");

        }

    });

    // ================= Edit =================

    editBtn.addEventListener("click", () => {

        currentTaskText = text;

        openModal(
            "Edit Task",
            "editTask",
            text.innerText
        );

    });

    // ================= Delete =================

    deleteBtn.addEventListener("click", () => {

        const answer = confirm("Delete this task?");

        if (answer) {

            task.remove();

        }

    });

}