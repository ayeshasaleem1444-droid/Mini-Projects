// element selection
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksList = document.getElementById("tasksList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const totalCount = document.getElementById("totalCount");
const doneCount = document.getElementById("doneCount");
const remainingCount = document.getElementById("remainingCount");
const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterDone = document.getElementById("filterDone");
// 2. State Variables
let tasks = [];
let currentFilter = "all"; // Options: 'all', 'active', 'done'

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task object
  const newTask = {
    id: Date.now(), // Unique ID using timestamp
    text: taskText,
    completed: false,
  };

  // Add to array, clear input, and refresh UI
  tasks.push(newTask);
  taskInput.value = "";
  render();
}

// Function to toggle a task's completed status
function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  render();
}

// Function to delete a single task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  render();
}

// Function to clear all completed tasks
function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  render();
}

// Function to update the top statistic counters
function updateCounters() {
  const total = tasks.length;
  const done = tasks.filter((task) => task.completed).length;
  const remaining = total - done;

  totalCount.textContent = `${total} Total`;
  doneCount.textContent = `${done} Done`;
  remainingCount.textContent = `${remaining} Remaining`;
}

// Function to handle filter button switching styles
function updateFilterButtons() {
  // Remove 'active' class from all buttons
  filterAll.classList.remove("active");
  filterActive.classList.remove("active");
  filterDone.classList.remove("active");

  // Add 'active' class to current filter button
  if (currentFilter === "all") filterAll.classList.add("active");
  if (currentFilter === "active") filterActive.classList.add("active");
  if (currentFilter === "done") filterDone.classList.add("active");
}

// ==========================================
// 4. The Render Function (Draws the UI)
// ==========================================
function render() {
  // Clear the existing list inside the container
  tasksList.innerHTML = "";

  // Filter tasks based on current selection
  let filteredTasks = tasks;
  if (currentFilter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (currentFilter === "done") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  // If there are no tasks matching the filter, show empty state
  if (filteredTasks.length === 0) {
    tasksList.innerHTML = `<div class="empty-state">No tasks available</div>`;
    updateCounters();
    return;
  }

  // Generate HTML template for each task dynamically
  filteredTasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;

    // Inline styling adjustment for task list items to match your UI nicely
    taskItem.style.display = "flex";
    taskItem.style.alignItems = "center";
    taskItem.style.justifyContent = "space-between";
    taskItem.style.padding = "10px 0";
    taskItem.style.borderBottom = "1px solid #f0f0f0";

    taskItem.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1;" onclick="toggleTask(${task.id})">
        <input type="checkbox" ${task.completed ? "checked" : ""} style="cursor: pointer;">
        <span style="text-decoration: ${task.completed ? "line-through" : "none"}; color: ${task.completed ? "#999" : "#333"}; font-weight: 500;">
          ${task.text}
        </span>
      </div>
      <button onclick="deleteTask(${task.id})" style="background: none; border: none; color: #ff5252; cursor: pointer; font-size: 1.1rem; font-weight: bold; padding: 0 5px;">
        &times;
      </button>
    `;

    tasksList.appendChild(taskItem);
  });

  // Update counters and active filter tabs
  updateCounters();
  updateFilterButtons();
}

// ==========================================
// 5. Event Listeners
// ==========================================

// Click listener for the Add Button
addTaskBtn.addEventListener("click", addTask);

// Keyboard listener to allow pressing "Enter" inside the input box
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Click listener for Clear Completed Button
clearCompletedBtn.addEventListener("click", clearCompleted);

// Filter Button Event Listeners
filterAll.addEventListener("click", () => {
  currentFilter = "all";
  render();
});

filterActive.addEventListener("click", () => {
  currentFilter = "active";
  render();
});

filterDone.addEventListener("click", () => {
  currentFilter = "done";
  render();
});

// Initial call to set up the empty state correctly on load
render();
