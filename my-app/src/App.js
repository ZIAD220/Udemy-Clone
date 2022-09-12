import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CoursePage from './components/CoursePage';
import SearchPage from './components/SearchPage';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {setList(data[0].courses); console.log(data)});
  }, []);

  const coursesRoutes = list.map((course) => <Route path={`/course/${course.id}`} element={<CoursePage {...course}/>}> </Route>);

  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home list={list}/>}/>
          <Route path='/results' element={<SearchPage list={list}/>}/>
          {coursesRoutes}
        </Routes>
      </div>
  );
}

export default App;
