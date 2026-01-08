import "./hero.css"

function Hero() {
    return (
        <div className="hero container-fluid p-lg-4 p-0" id="hero">
            <div className="row justify-content-center flex-column-reverse flex-sm-column-reverse flex-lg-row">
                <div className="col-12 col-sm-12 col-lg-7  text-center text-lg-start heroLeft">
                    <h1 className="mainHeading mb-3 fs-1">
                        Hi, I’m Junaid 👋
                    </h1>
                    <h4 className="tagline fs-3">Frontend & MERN Stack Developer</h4>
                    <div className="btn-group pt-4 justify-content-lg-start justify-content-center">
                        <a href="#contact" className="hireMe fs-6">Hire Me</a>
                        <a className="secondaryBtn fs-6" href="#project">View Projects</a>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-4 justify-content-center justify-content-lg-end heroRight mb-5 mb-lg-0">
                    <div className="heroImageWrapper">
                        <img src="person.avif" className="heroImage" />
                        <div className="floatingDot dot1"></div>
                        <div className="floatingDot dot2"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;