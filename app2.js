const addTask = () => {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('task-container');
    const existingTasks = taskList.getElementsByTagName('li');



    if(taskText !== ""&& existingTasks.length <6){

        const listItem = document.createElement('li');
        listItem.className = 'item';
        listItem.innerHTML = `
            <div class="item-content">
                <span class="list-item">${taskText}</span>
                <div class="btn-list">
                    <button onclick="deleteTask(this)">Delete</button>
                    <button onclick="toggleComplete(this)">Complete</button>
                </div>
            </div>
        `;                                                                                                                                                                                  


          TasksLeft()
        taskList.appendChild(listItem);
        taskInput.value = '';

    }else if(taskText === ""){
        alert('Please enter a task');
    }else{
        alert('You can only add up to 6 tasks');
    }

};

const TasksLeft =()=>{
    const taskList = document.getElementById('task-container');
    const updatedTasks = taskList.querySelectorAll(".list-item:not(.completed)").length;
    document.getElementById("tasks-left").innerHTML = updatedTasks;
}






const deleteTask = (button)=>{
Listitem = button.closest('.item');
TasksLeft();
Listitem.remove();
filterTasks(currentFilter);
}


const toggleComplete = (button)=>{
    constListItem = button.closest(".item").querySelector(".list-item");
    listItem.classList.toggle("completed");
    TasksLeft();
    filterTasks(currentFilter);
}

let currentFilter = 'all';
const filterTasks = (filter)=>{
    currentFilter = filter;
   const ListContainer = document.getElementById('task-container');
   const tasks = Array.from(ListContainer.getElementsByClassName('.item'));
   tasks.forEach(task => {
       const isCompleted = task.querySelector('.list-item').classList.contains('completed');
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
   });                              
}

/*

What ive learnd in this project:

1. How to add a task to the list                
2. How to delete a task from the list   
3. How to mark a task as complete   
4. How to filter tasks  
5. How to update the number of tasks left   
6. How to update the number of tasks left



*/


























