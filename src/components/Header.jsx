import { useState } from "react"
function Header(){
    const [show , setShow] = useState(false)
    return (
        <>
           <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav_logo">Morteza Mohiuodin</a>
                <div className={`nav_menu ${show && 'show-menu'}`} id="nav-menu">
                    <ul className="nav_list">

                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-house nav_icon"></i>Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#profile" className="nav_link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-user nav_icon"></i>Profile
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-computer nav_icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#languages" className="nav_link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-comments nav_icon"></i>Languages
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#experience" className="nav_link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-briefcase nav_icon"></i>Experiences
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#certificates" className="nav_link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-graduation-cap nav_icon"></i>Certificates
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#education" className="nav_link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-book-bookmark nav_icon"></i>Education
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#interests" className="nav_link" onClick={()=>setShow(false)}>
                                <i className="fa-solid fa-icons nav_icon"></i>Interests
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="nav_toggle" id="nav-toggle" onClick={()=>setShow(!show)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header