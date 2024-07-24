import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profiles'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Languages from './components/Languages'
import Experience from './components/Experience'
import ExperienceExtra from './components/ExperienceExtra'
import Education from './components/Education'
import Showcases from './components/Showcases'

function App() {
  // document.body.classList.add("scale-cv");
  
  return (
    <>
      <div>
        <Header/>
        <main className="l-main bd-container">
          <div id="area-cv" >
            <div className="resume" >
              <div className="resume_left">
                <Home/>
                <hr  style={{borderTop: 'dotted 1px',marginTop:-8,borderColor:'#ddd'}}/>
                <Socials/>
                <Profile/>
                <Skills/>
                <Education/>
              
              </div>
              <div className="resume_right">
                <Experience/>
              </div>
            </div>
            <div className="resume" >
              <div className="resume_left">
              <Languages/>
              <Showcases/>
              </div>
              <div className="resume_right">
                  <ExperienceExtra/>
              </div>
            </div>
          </div>
     
        </main>
      </div>        
    </>
  )
}

export default App
