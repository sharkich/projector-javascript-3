`use strict`;


import { renderList } from './renderList.js';
import { formListener } from './formListener.js';

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
// Mark a task as completed
// Delete all completed tasks
// Filter tasks by completed and uncompleted (different lists)
// Search tasks by name

// Save data to localStorage

const startApp = () => {
    console.log('Workshop1 startApp');

    const tasksList = ['Поспати', 'Поспати ще', 'Поспати ще трохи'];

    renderList(tasksList);

    formListener((newTask) => {
        tasksList.push(newTask);
        renderList(tasksList);
    });
};

document.addEventListener('DOMContentLoaded', startApp);
