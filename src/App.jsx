
import NavBar from './component/NavBar'
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Project from './component/Project';
import Education from './component/Education';
import Experience from './component/Experience';
import './App.css'
function App() {

  return (
    <div className='app'>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet" element={<Project />} />
      <Route path="/formation" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Erreur 404</p>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
