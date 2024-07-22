import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profiles'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Languages from './components/Languages'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Interests from './components/Interests'

function App() {

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
              <Languages/>
            </div>
            <div className="resume_right">
              <Experience/>
              <Certificates/>
              <Education/>
              <Interests/>
            </div>
          </div>
        </main>
      </div>        
    </>
  )
}

export default App
