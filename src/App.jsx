import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profiles'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Languages from './components/Languages'
import Experience from './components/Experience'
import Education from './components/Education'
import Showcases from './components/Showcases'

function App() {
  document.body.classList.add("scale-cv");
  
  return (
    <>
      <div>
        <Header/>
        <main className="l-main bd-container">
          <div className="resume" id="area-cv">
            <div className="resume_left">
              <Home/>
              <Socials/>
              <Profile/>
              <Skills/>
              <Education/>
              <Languages/>
            </div>
            <div className="resume_right">
              <Showcases/>
              <Experience/>
            </div>
          </div>
        </main>
      </div>        
    </>
  )
}

export default App
