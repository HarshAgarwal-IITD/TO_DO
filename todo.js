let todo = [];

// Add Event Listeners
document.getElementById('addButton').addEventListener('click', addTodo);
document.getElementById('deleteFirstButton').addEventListener('click', deleteFirstTodo);
document.getElementById('deleteLastButton').addEventListener('click', deleteLastTodo);

function addTodo() {
    const inputBox = document.getElementById('inputBox');
    if (inputBox.value.trim()) {
        todo.push({ text: inputBox.value.trim(), completed: false });
        inputBox.value = "";
        render();
    }
}

function deleteFirstTodo() {
    todo.shift();
    render();
}

function deleteLastTodo() {
    todo.pop();
    render();
}

function deleteTodo(i) {
    todo.splice(i, 1);
    render();
}

function toggleCompletion(i) {
    todo[i].completed = !todo[i].completed;
    render();
}
function toggleEdit(i){

}
function render() {
    const list = document.querySelector('.todoList');
    list.innerHTML = "";
    todo.forEach((task, index) => {
        const div = document.createElement('div');
        div.className = `flex items-center gap-2 p-2 rounded-md border-l-4 ${task.completed ? 'bg-gray-700 line-through border-purple-500' : 'bg-gray-800 border-gray-600'}`;
        
        

        const span = document.createElement('span');
        span.textContent = task.text;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.className = 'accent-purple-500';
        checkbox.addEventListener('change', () => toggleCompletion(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.className = 'px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 active:scale-95 transition-transform';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

      
        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(deleteBtn);
        list.appendChild(div);
    });
}
