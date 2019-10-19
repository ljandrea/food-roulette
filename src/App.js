import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/HomePage';

// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/pause08" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div> */ }

class App extends Component {
    render() {
        return (
            <div className="App">

                <HomePage />
            </div>
        );
    }
}

export default App;
