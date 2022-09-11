import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CoursePage from './components/CoursePage';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course/1' element={<CoursePage/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
