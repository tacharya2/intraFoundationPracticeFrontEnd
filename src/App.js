import React from 'react';
import Form from './Form';
import Login from './Login';
import './App.css';
import { BrowserRouter , Routes, Route} from'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1 >IntraNational Support Foundation of America</h1>
    <Login/>
    </div>
  );
}
export default App;