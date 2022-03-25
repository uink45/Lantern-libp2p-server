import React from 'react';
import ServerData from './ServerData';
import './App.css';

async function refreshPage() {
    window.location.reload(false);
}

function App() {
    return (
        <div className='App'>            
            <ServerData/>
            <button onClick={refreshPage}>Refresh page</button>
        </div>

        
    );
}

export default App;

