import { Link } from "react-router-dom";
import "./sideNav.css"

function SideNav({setHam}) {
    return (
        <div style={{width: "100%"}}>
            <div className="d-flex justify-content-end" onClick={setHam} style={{margin: "0.5rem 0"}}>
            <i className="fa-solid fa-x p-2 fs-6 mt-0 me-3" ></i>
            </div>
            <div className="nav">
                <div className="navbar-brand mb-3 ">
                    <h4 className="poppins-semibold fs-5 ">Junaid.dev</h4>
                </div>
                <div className="nav-ul">
                    <div className="navbar-nav">
                        <a className="nav-link menu-item" href="#hero" onClick={setHam}>Home</a>
                        <a className="nav-link menu-item" href="#skill" onClick={setHam}>Skills</a>
                        <a className="nav-link menu-item" href="#project" onClick={setHam}>Projects</a>
                        <a className="nav-link menu-item" href="#About" onClick={setHam}>About</a>
                        <a className="nav-link menu-item" href="#contact" onClick={setHam}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;