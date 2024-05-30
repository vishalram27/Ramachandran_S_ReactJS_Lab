import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './component/ExpenseTracker';
import ShowData from './component/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/addexpense' element={< ExpenseTracker onClose={() => { }} onTrue={() => { }} />}></Route>
          <Route path='/' element={< ShowData />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;