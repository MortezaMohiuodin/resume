function Languages(){
    return (
        <>
           <section className="languages section" id="languages">
                        <h2 className="section-title">Languages</h2>

                        <div className="languages_container">
                            <ul className="languages_content bd-grid">
                                <li className="languages_name">
                                    <span className="languages_text">French</span>
                                    <span className="languages_stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </li>
                                <li className="languages_name">
                                    <span className="languages_text">English</span>
                                    <span className="languages_stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star languages_stars_checked"></i>
                                        <i className="fa-solid fa-star languages_stars_checked"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>
        </>
    )
}
export default Languages