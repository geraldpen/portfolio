
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Index';
// import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
// import Project from './pages/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
        <Routes>
          <Route path ="home" element={<Home/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/experience" element={<Experience/>}/>
          {/* <Route path ="/project" element={<Project/>}/> */}
          <Route path ="/cotact" element={<Contact/>}/>
          {/* <Route path="/project/:id" element={<ProjectDisplay/>}/> */}
        </Routes>
       <Footer/>
      </Router>
      </div>
  );
}
export default App;
