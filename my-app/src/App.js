import { Route } from 'react-router-dom';
import './App.css';
import CoursesTabs from './components/CoursesTabs';
import ExploreBox from './components/ExploreBox';
import NavBar from './components/NavBar';
import TopAnnounce from './components/TopAnnounce';
import Wall from './components/Wall';
import Home from './components/Home';
import CoursePage from './components/CoursePage';

function App() {
  return (
    <>
      <div className="App">
        <CoursePage></CoursePage>
      </div>
    </>
    
  );
}

export default App;
