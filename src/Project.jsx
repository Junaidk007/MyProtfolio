import "./project.css"

function Project() {
    return (
        <div id="project" className="pt-4">
        <div className="pj container-fluid p-4 mb-5 p-lg-5" >
            <h3 className="mb-5 fs-1 p-lg-5">Projects</h3>
            <div className="d-flex card-container overflow-y-hidden overflow-x-scroll gap-4 pb-3">
                <div className="card" style={{ width: "17.5rem", borderRadius: "1rem", overflow: "hidden", flex: "0 0 auto" }}>
                    <img src="ainotesassistant.png" className="card-img-top" alt="..." />
                    <div className="card-body border-top">
                        <h5 className="card-title">AiNotesAssistant</h5>
                        <p className="card-text mb-5 fs-6">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <div className="mb-4">
                            <a href="https://ai-notes-assistant-i47e.onrender.com/" target="_blank" className="hireMe me-3">Live Demo</a>
                            <a href="https://github.com/Junaidk007/AI-Notes-Assistant" className="secondaryBtn">Code</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: "17.5rem", borderRadius: "1rem", overflow: "hidden", flex: "0 0 auto" }}>
                    <img src="bookmybrix.png" className="card-img-top" alt="..." />
                    <div className="card-body border-top">
                        <h5 className="card-title">BookMyBrix</h5>
                        <p className="card-text mb-5 fs-6">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <div className="mb-4">
                            <a href="https://major-project-airbnb-clone.onrender.com/signup" className="hireMe me-3 fs-6" target="_blank">Live Demo</a>
                            <a href="https://github.com/Junaidk007/major-Project" className="secondaryBtn fs-6">Code</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ width: "17.5rem", borderRadius: "1rem", overflow: "hidden", flex: "0 0 auto" }}>
                    <img src="bookmybrix.png" className="card-img-top" alt="..." />
                    <div className="card-body border-top">
                        <h5 className="card-title">BookMyBrix</h5>
                        <p className="card-text mb-5 fs-6">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <div className="mb-4">
                            <a href="https://major-project-airbnb-clone.onrender.com/signup" className="hireMe me-3 fs-6" target="_blank">Live Demo</a>
                            <a href="https://github.com/Junaidk007/major-Project" className="secondaryBtn fs-6">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Project;