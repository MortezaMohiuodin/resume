import profile from '../assets/profile.png'
function Home(){
    return (
        <>
          <section className="home" id="home">
                        <div className="home_container section bd-grid">

                            <div className="home_data bd-grid">
                                <img src={profile} alt="Icon picture" className="home_img" id="home-img"/>
                                <h1 className="home_title">LEA <b>GALLIER</b></h1>
                                <h3 className="home_profession">Analyst developer</h3>
                                <div>
                                    <a download="" id="download-button" className="home_button-movil">Download</a>
                                </div>
                            </div>

                            <div className="home_address bd-grid">
                                <span className="home_information">
                                    <i className="fa-solid fa-location-dot home_icon"></i> Port-Jérôme sur Seine - France
                                </span>
                                <span className="home_information">
                                    <a href="mailto:leagallier.lag@gmail.com" className="home_link">
                                        <i className="fa-solid fa-envelope home_icon"></i> leagallier.lag@gmail.com
                                    </a>
                                </span>
                                <span className="home_information">
                                    <a href="tel:+33611451165" className="home_link">
                                        <i className="fa-solid fa-phone home_icon"></i> 06.11.45.11.65
                                    </a>
                                </span>
                            </div>
                        </div>

                        <i className="fa-solid fa-moon change-theme" title="Theme" id="theme-button"></i>

                        <i className="fa-solid fa-download generate-pdf" title="Generate PDF" id="resume-button"></i>

                    </section>
        </>
    )
}
export default Home