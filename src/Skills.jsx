import "./skills.css"

function Skills() {
    return ( 
        <div id="skill" className="pt-4;">
        <div className="main mb-5 pb-5 p-4 p-lg-5" >
            <h3 className="mb-5 fs-1 ps-lg-5">Skills</h3>
            <div className="skillsList">
                <button className="secondaryBtn">HTML5</button>
                <button className="secondaryBtn">CSS3</button>
                <button className="secondaryBtn">JavaScript</button>
                <button className="secondaryBtn">React</button>
                <button className="secondaryBtn">Node js</button>
                <button className="secondaryBtn">MongoDB</button>
                <button className="secondaryBtn">MySql</button>
                <button className="secondaryBtn">Express</button>
                <button className="secondaryBtn">Bootstrap</button>
                <button className="secondaryBtn">MERN</button>
            </div>
        </div>
        </div>
     );
}

export default Skills;