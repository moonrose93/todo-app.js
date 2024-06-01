const addTask = () => {
    const inputEl = document.getElementById('task-input');
    const taskText = inputEl.value.trim();
    const ListContainer = document.getElementById('task-container');
    const existingTasks = ListContainer.getElementsByTagName('li');


    if (taskText !==" && existingTasks.length < 6") {
        const Listitem= document.createElement('li');
    Listitem.className = 'item';

    Listitem.innerHTML = `
        <div class="item-content">
            <span class="list-item">${taskText}</span>
            <div class="btn-list">
                <button onclick="deleteTask(this)">Delete</button>
                <button onclick="toggleComplete(this)">Complete</button>
            </div>
        </div>
    `;
    ListContainer.appendChild(Listitem);
    inputEl.value = '';

    }else if (taskText ===""){
        alert('Please enter a task');
    }else{
        alert('You can only add up to 6 tasks');
    }
};


const TasksLeft = () => {
    const ListContainer = document.getElementById('task-container');
    const updatedTasks = ListContainer.querySelectorAll(".list-item:not(.completed)").length;
    document.getElementById("tasks-left").innerHTML = updatedTasks;
}

const deleteTask =(button)=>{
    const ListItem = button.closest('.item');
    ListItem.remove();
    TasksLeft();
    filterTasks(currentFilter);
}

const toggleComplete = (button)=>{
    const ListEl = button.closest(".item").querySelector(".list-item");
    ListEl.classList,toggle('completed');
    fileterTasks(currentFilter);
    TasksLeft();
}



let currentFilter = "all";
const filterTasks = (filter)=>{
    currentFilter=filter;
    const ListContainer = document.getElementById('task-container');

    const tasks = Array.from(ListContainer.getElementsByClassName('.item'));
    tasks.forEach(task => {
        const isCompleted = task.querySelector(".list-item").classList.contains('completed');
        switch(filter){
            case 'all':
                task.style.display = 'flex';
                break;
            case 'active':
                task.style.display = isCompleted ? 'none' : 'flex';
                break;
            case 'completed':
                task.style.display = isCompleted ? 'flex' : 'none';
                break;

     

        }
    }
}