import React, { useEffect, useState } from 'react';
import ToDoList from '../../Data/ToDoList';

/* 
    To Do

    Modify AddToDo, UpdateToDo, DeleteTodo
    for localStorage
*/


const Body = () => {
    let [todoList, setTodoList] = useState(null);
    let [newTask, setNewTask] = useState('');

    useEffect(() => {
        const existingToDoS = localStorage.getItem('TodoList');
        const json = JSON.parse(existingToDoS);
        let tdlist = json;
        setTodoList(tdlist);
    }, []);

    let AddToDo = () => {
        if (!newTask.trim())
            return;

        const newItem = {
            'Task': newTask,
            'priority': 1
        }

        let updatedTodoList = [...todoList, newItem]
        localStorage.setItem('TodoList', JSON.stringify(updatedTodoList));

        setTodoList(updatedTodoList);
        setNewTask('');
    }

    let RemoveToDo = (index) => {
        let temp = [...todoList];
        temp.splice(index, 1);
        setTodoList(temp);
    }

    let EditToDo = (index) => {
        let todoToEdit = todoList[index];
        let updatedTodo = prompt('Edit the current to do', todoToEdit.Task);
        let updatedList = [...todoList];
        updatedList[index].Task = updatedTodo;
    }

    const deleteIcon = new URL("../Assets/Images/deleteIcon.png", import.meta.url).href;
    const editIcon = new URL("../Assets/Images/edit.png", import.meta.url).href;

    if (todoList === null) {
        return (<h3>Loading...</h3>);
    }

    return (
        <div id='Body'>
            <div id='AddToDo'>
                <input id='ToDoInput' type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <button id='ToDoAddBtn' onClick={AddToDo}>Add</button>
            </div>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <td>Task</td>
                        <td width="2%">Update</td>
                        <td width="2%">Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((item, index) => 
                            <tr key={index}>
                                <td>
                                    {item.Task}
                                </td>
                                <td style={{justifyContent: 'center'}}>
                                    <img onClick={() => EditToDo(index)} src={editIcon} alt='Decorative' height='25px' width='25px'/>
                                </td>
                                <td style={{justifyContent: 'center'}}>
                                    <img onClick={() => RemoveToDo(index)} src={deleteIcon} alt='Decorative' height='25px' width='25px'/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Body;