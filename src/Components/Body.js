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

    return (
        <div id='Body'>
            <div id='AddToDo'>
                <input id='ToDoInput' type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <button id='ToDoAddBtn' onClick={AddToDo}>Add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Task</td>
                        <td>Priority</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDoList.map((item, index) => 
                            <tr key={index}>
                                <td>{item.Task}</td>
                                <td>{item.priority}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Body;