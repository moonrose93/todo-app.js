// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('task-container');
    const existingTasks = taskList.getElementsByTagName('li');

    // Check if taskText is not empty and if there are fewer than 6 tasks
    if (taskText !== "" && existingTasks.length < 6) {
        const listItem = document.createElement('li');
        listItem.className = 'item'; // Add item class to new list item

        listItem.innerHTML = `
            <div class="item-content">
                <span class="list-item">${taskText}</span>
                <div class="btn-list">
                    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                    <button class="complete-btn" onclick="toggleComplete(this)">Complete</button>
                </div>
            </div>
        `;
        
        taskList.appendChild(listItem);
        taskInput.value = '';
        filterTasks(currentFilter); // Update filter after adding a task
        TasksLeft();
    } else if (taskText === "") {
        alert('Please enter a task');
    } else {
        alert('You can only add up to 6 tasks');
    }
}


const TasksLeft = () => {
    const taskList = document.getElementById('task-container');
    const updatedTasks = taskList.querySelectorAll(".list-item:not(.completed)").length;

    document.getElementById("tasks-left").innerHTML = updatedTasks;
}

// Function to delete a task from the list
function deleteTask(button) {
    const listItem = button.closest('.item');
    listItem.remove();
    TasksLeft();
    filterTasks(currentFilter); // Update filter after deleting a task
}

// Function to mark a task as complete
function toggleComplete(button) {
    const listItem = button.closest('.item').querySelector('.list-item');
    listItem.classList.toggle('completed');
    TasksLeft();
    filterTasks(currentFilter); // Update filter after toggling task status
}

// Function to filter tasks
let currentFilter = 'all';
function filterTasks(filter) {
    currentFilter = filter;
    const taskList = document.getElementById('task-container');
    //kreirame array od site tasks koi se sodrzat votasklist container so className item(toa e eden list task)
    const tasks = Array.from(taskList.getElementsByClassName('item'));

    tasks.forEach(task => {
        const isCompleted = task.querySelector('.list-item').classList.contains('completed');
        switch (filter) {
            case 'all':
                task.style.display = 'flex'; // Show all tasks
                break;
            case 'active':
                task.style.display = isCompleted ? 'none' : 'flex'; // Show active tasks only
                break;
            case 'completed':
                task.style.display = isCompleted ? 'flex' : 'none'; // Show completed tasks only
                break;
        }
    });
}

// Theme toggle functionality
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const body = document.body;

// Check the initial theme and show the correct icon

//aha here checks if the dark-theme class is present in our HTML

// Check the initial theme and show the correct icon and background image
if (body.classList.contains('light-theme')) {
    light.style.display = 'none';
    dark.style.display = 'inline-block';
    body.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
} else {
    light.style.display = 'inline-block';
    dark.style.display = 'none';
    body.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
}

light.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    light.style.display = 'none';
    dark.style.display = 'inline-block';
    body.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
});

dark.addEventListener('click', () => {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    dark.style.display = 'none';
    light.style.display = 'inline-block';
    body.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
});

/*Yes, exactly! By calling `filterTasks(currentFilter)` within the `deleteTask` and `toggleComplete` functions, you ensure that the displayed tasks are updated according to the current filter whenever a task is deleted or marked as complete. This keeps the task list view consistent with the selected filter, whether it's showing all tasks, only active tasks, or only completed tasks. 

This approach ensures that your application remains responsive to user actions and that the task list is always correctly filtered without requiring a page reload or additional manual actions.

Your code looks well-organized and functional. Here are a few additional tips to further enhance your to-do list application:

1. **Event Delegation:** Consider using event delegation for handling task actions. This can simplify your code and improve performance, especially if the list of tasks grows.

2. **Local Storage:** Save tasks to local storage to maintain the state of the task list and theme even after the page is refreshed.

3. **Accessibility:** Ensure your buttons and interactive elements are accessible (e.g., add ARIA labels, ensure focus states are clear).

If you have any specific questions or need further assistance with your code, feel free to ask! */



/*toggled?
ChatGPT
Yes, exactly! By calling filterTasks(currentFilter) after deleting or toggling a task, the filter function can accurately update the display based on the current state of the tasks. This means:

When a task is deleted, filterTasks will remove it from the view, ensuring the filtered list reflects the current tasks.
When a task is toggled (marked as complete or active), filterTasks will update the view to show or hide the task based on the current filter setting (all, active, or completed).
This keeps the task list view consistent and up-to-date without requiring additional user actions. */