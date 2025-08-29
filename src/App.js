import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';

const AppLayout = () => {
    return (
        <div className='AppLayout'>
            <Header />
            <Body />
        </div>
    )
}

// const Header = React.createElement('h1', null, 'To Do List');
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<AppLayout />);