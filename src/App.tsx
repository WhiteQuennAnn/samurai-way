import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <div> <Header /> </div>
            <div className="App">
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

            <div className="App">
                <a>Home</a>
                <a>New Feed</a>
                <a>Messages</a>
            </div>
            );
}

export default App;
