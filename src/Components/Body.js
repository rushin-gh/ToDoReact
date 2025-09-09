import React from 'react';
import ToDoList from '../../Data/ToDoList';

const Body = () => {

    console.log(ToDoList);

    return (
        <div id='Body'>
            <ol>
                {
                    ToDoList.map((item, index) => <li key={index}>{item}</li>)
                }
            </ol>
        </div>
    )
}

export default Body;