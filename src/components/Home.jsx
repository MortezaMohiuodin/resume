import { useState } from 'react';
import html2pdf from 'html2pdf.js'
import profile from '../assets/profile.jpg'
function Home(){
    const defaultState = localStorage.getItem("dark-mode");
    const [theme,setTheme] = useState(defaultState)
    const generatePdf = ()=>{
          // Adapt the area of the PDF
        
        addScaleCV();
        // Generate the PDF
        generateResume();
        // Remove adaptation after 1 second (you can choose to set more than 1 second if your PDF download time is long)
        setTimeout(removeScaleCV, 1000);
    }
    function enableDarkMode() {
        setTheme('dark')
        document.body.classList.add('dark-theme');
        localStorage.setItem("dark-mode", "enabled");
      }
      
      function disableDarkMode() {
        setTheme('light')
        document.body.classList.remove('dark-theme');
        localStorage.setItem("dark-mode", "disabled");
      }
    function handleThemeChange (){
        theme === 'dark' ? disableDarkMode() : enableDarkMode() 
    }
    return (
        <>
          <section className="home" id="home">
                        <div className="home_container section bd-grid">

                            <div className="home_data bd-grid">
                                <img src={profile} alt="Icon picture" className="home_img" id="home-img"/>
                                <h1 className="home_title">Morteza <b>Mohiuodin</b></h1>
                                <h3 className="home_profession">Frontend Developer</h3>
                               
                                <div>
                                    {/* <a download="" id="download-button" className="home_button-movil">Download</a> */}
                                </div>
                            </div>

                        
                        </div>

                        <i className={`fa-solid fa-moon change-theme ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`} title="Theme" id="theme-button" onClick={()=>handleThemeChange()}></i>

                        <i className="fa-solid fa-download generate-pdf" title="Generate PDF" id="resume-button" onClick={()=>generatePdf()}></i>

                    </section>
        </>
    )
}
export default Home

function addScaleCV() {
    document.body.classList.add("scale-cv");
}

// Generate PDF with html2pdf.js
function generateResume() {
    // PDF filename change depending of the light/dark mode
    // PDF generated area
    let areaCV = document.getElementById("area-cv");
    let opt = {
        margin: 0,
        filename: "myResumeCV-light.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 4, useCORS: true  },
        jsPDF: { format: "a4", orientation: "portrait" },
        // pagebreak: { mode: 'avoid-all', before: '#page2el' }
    };
    html2pdf(areaCV, opt);
}

function removeScaleCV() {
    document.body.classList.remove("scale-cv");
}

