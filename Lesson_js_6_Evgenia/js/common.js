document.addEventListener('DOMContentLoaded', function(){
    const intText = document.querySelector('.input-text');
    const btnAdd = document.querySelector('.button-add');
    let listWrapper = document.querySelector('.list-wrapper');

    let array;

    if (localStorage.tasks){
        array = JSON.parse(localStorage.getItem('tasks'));
    } else{
        array = [];
    }

    function newList(task){
        this.task = task;
        this.status = false;
    }
    
    const refreshLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(array))
    }

    const addNewTask = () => {
        array.push(new newList(intText.value));
        refreshLocalStorage();
        showTasksList();
        intText.value = null;
    };

    const createRow = (elem, index) =>{
        return `
        <div class="task-row ${elem.status ? 'task-row--checked' : "" }">
            <span class="task-number">${index + 1}</span>
            <h3 class="task-title">${elem.task}</h3>
            <input class="task-status" type="checkbox" ${elem.status ? "checked" : ""} data-index="${index}">
            <button class="button button-delete" data-index="${index}">Удалить</button>
        </div>`
    }

    const showTasksList =() => {
        listWrapper.innerHTML = "";
        array.forEach((elem, index) =>{
            listWrapper.innerHTML += createRow(elem, index);
        });

        const tasksCheckbox = document.querySelectorAll('.task-status');
        const deleteCheckbox = document.querySelectorAll('.button-delete');
        tasksCheckbox.forEach(elem =>{
            elem.addEventListener('change', checkTask);
        });
        deleteCheckbox.forEach(elem =>{
            elem.addEventListener('click', deleteTask);
        });
    };

    function checkTask (){
        array[this.dataset.index].status = !array[this.dataset.index].status;
        refreshLocalStorage();
        showTasksList();
    };

    function deleteTask(){
        array.splice(this.dataset.index, 1);
        refreshLocalStorage();
        showTasksList();
    }

    showTasksList();

    btnAdd.onclick = addNewTask;

    document.addEventListener('keyup', function (evt){
        if ( evt.code =='Enter' || evt.key == 'Enter'){
            addNewTask();
        }
    })




});