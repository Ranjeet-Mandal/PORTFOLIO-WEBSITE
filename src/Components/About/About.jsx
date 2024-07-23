import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/ranjeet.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Enthusiastic frontend developer with a strong foundation in web
              technologies, including React. Passionate about creating engaging,
              user-friendly interfaces.
            </p>
            <p>
              Skilled in HTML, CSS, JavaScript, and React through various
              projects. Excited to collaborate with teams and deliver innovative
              solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>NEXT JS</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>DSA</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>FRESHERS</h1>
        </div>
      </div>
    </div>
  );
};
export default About;
