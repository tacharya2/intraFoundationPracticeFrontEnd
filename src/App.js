import React, {useState} from 'react';
import Form from './Form';
import Login from './Login';
import './App.css';


//Here, I need to implement a dynamic rendering of the page using import { BrowserRouter , Routes, Route} from 'react-router-dom';

//Below is temporary
function App() {
const [currentPage, setCurrentPage] = useState('login');//default page

const handlePageChange = (page) => {
setCurrentPage(page);
};

  return (
    <div className="App">
    <h1>Intra-national Welfare and Support Foundation of America</h1>
      <header className="App-header">
        {/* Buttons to switch between pages */}
        <button onClick={() => handlePageChange('login')}>Login</button>
        <button onClick={() => handlePageChange('form')}>Form</button>
      </header>
      <main className="App-content">
        {/* Conditionally render pages */}
        {currentPage === 'login' && <Login />}
        {currentPage === 'form' && <Form />}
      </main>
    </div>
  );
}
export default App;