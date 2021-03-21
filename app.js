/*
Author: Thomas Weir
Title: JavaScript Programming Homework Exercise 6
Data: 2021-03-21
*/
let tasks = [];
const $ = (element) => {
    element = getElementByID(element);
    return element;
}
function updateTaskList()
{
    taskList = getElementByID(taskListDisplay);
    if (!Array.isArray(tasks) || !Array.length)
    {
        taskListDisplay = " ";
    }
    else
    {
        for (i = 0; i < tasks.length; i++)
        {
            taskListDisplay += tasks[i] + "<br>";
        }
    }
}
const addTask = function()
{
    invalidTask = getElementByID(invalidTask);
    invalidTask = " ";
    task = getElementByID(taskInput);
    if (isEmpty(taskInput) == true)
    {
        invalidTask.push('Task cannot be blank.');
        return false;
    }
    else if (isEmpty(taskInput) == false)
    {
        task.push(taskInput);
        for (i = 0; i < tasks.length; i++)
        {
            taskListDisplay += tasks[i] + "<br>";
        }
    }
}
const sortTasks = function()
{
    task.sort();
    for (i = 0; i < tasks.length; i++)
    {
        taskListDisplay += tasks[i] + "<br>";
    }
}
const deleteTask = () => {
    deleteErrors = getElementByID(invalidTaskNumber);
    deleteErrors = " ";
    taskToDelete = getElementByID(taskToDeleteInput);
    if (taskToDelete == false)
    {
        invalidTaskNumber.push('Enter a task number to delete.');
    }
    else if (isNaN(tasks) == true)
    {
        invalidTaskNumber.push('You did not enter a number.');
    }
    else if ([tasks].includes(taskToDelete) == false)
    {
        invalidTaskNumber.push('A task with that number does not exist.');
        return false;
    }
    else if (isNaN(tasks) == false && [tasks].includes(taskToDelete) == true)
    {
        task.pop(taskToDelete);
        for (i = 0; i < tasks.length; i++)
        {
            taskListDisplay += tasks[i] + "<br>";
        }
    }
}
addEventListener('click', addTask);
addEventListener('click', sortTasks);
addEventListener('click', deleteTask);