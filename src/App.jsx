import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';


function App() {
  return (<div className={styles.App}>
    <Navbar />
   <div>
      <Routes>
      <Route path='/' element={<Hero />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
    </div>
);
}

export default App;
