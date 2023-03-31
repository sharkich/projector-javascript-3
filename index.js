`use strict`;


import { renderList } from './renderList.js';
import { formListener } from './formListener.js';
import { saveList, loadList } from './ls.js';
import { listClickListener } from './listClickListener.js';
import { formChangeListener } from './formChangeListener.js';
import { byName } from './filters.js';

/*
  Google: todo list html css template
  https://freefrontend.com/bootstrap-to-do-lists/
  https://bbbootstrap.com/snippets/awesome-todo-list-template-25095891
 */

console.log('Workshop1 start');

// Create a new task
    // by clicking on the button
    // by pressing enter
// Delete a task
// Search tasks by name


// Mark a task as completed (1/2)
// Delete all completed tasks
// Filter tasks by completed and uncompleted (different lists)

// Save data to localStorage

const startApp = () => {
    console.log('Workshop1 startApp');

    const tasksList = loadList();

    renderList(tasksList);

    const updateList = () => {
        saveList(tasksList);
        renderList(tasksList);
    };

    const onSubmit = (newTask) => {
        tasksList.push({
            name: newTask,
            completed: false,
        });
        updateList();
    };

    formListener(onSubmit);

    listClickListener((index) => {
        tasksList.splice(index, 1);
        updateList();
    });

    formChangeListener((text) => {
        const filteredTasks = tasksList.filter(byName(text));
        renderList(filteredTasks);
    });
};

document.addEventListener('DOMContentLoaded', startApp);
