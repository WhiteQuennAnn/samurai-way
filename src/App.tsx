import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
         <Header />
            <div>
                <ul>
                    <li>css</li>
                    <li>html</li>
                    <li>js</li>
                    <li>react</li>
                </ul>
            </div>
        </div>
    );
}
const Header = () => {
    return (

            <div>
                <a href ="#s">Home</a>
                <a href ="#s">New Feed</a>
                <a href ="#s">Messages</a>
            </div>
            );
}

export default App;
