const listElement = document.querySelector('#list');

export const renderList = (tasksList) => {
    console.log('render.tasksList', tasksList);

    tasksList.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `<p>${task}</p>`;
        listElement.append(taskElement);
    });

};
