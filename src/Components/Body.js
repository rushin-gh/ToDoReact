import React from 'react';
import ToDoList from '../../Data/ToDoList';

const Body = () => {
    return (
        <div id='Body'>
            <table>
                <thead>
                    <tr>
                        <td>Task</td>
                        <td>Priority</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        ToDoList.map((item, index) => 
                            <tr key={index}>
                                <td>{item.Task}</td>
                                <td>{item.priority}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
            <ol>
                
            </ol>
        </div>
    )
}

export default Body;