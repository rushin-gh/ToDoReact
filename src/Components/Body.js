import React, { useState } from 'react';
import ToDoList from '../../Data/ToDoList';

const Body = () => {

    let [toDoList, setToDoList] = useState(ToDoList);
    let [newTask, setNewTask] = useState('');

    let AddToDo = () => {
        if (!newTask.trim())
            return;

        const newItem = {
            'Task': newTask,
            'priority': 1
        }
        
        setToDoList([...toDoList, newItem]);
        setNewTask('');
    }

    let RemoveToDo = (index) => {
        let temp = [...toDoList];
        temp.splice(index, 1);
        setToDoList(temp);
    }

    const deleteIcon = new URL("../Assets/Images/deleteIcon.png", import.meta.url).href;
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
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDoList.map((item, index) => 
                            <tr key={index}>
                                <td>
                                    {item.Task}
                                </td>
                                <td>
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