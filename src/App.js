import "./App.scss";
import profile_img from "./assets/profile.png"
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/all"
import { DiPython, SiCsharp, SiCplusplus, AiFillHtml5, DiSass, FaAngular, DiReact, AiOutlineConsoleSql } from 'react-icons/all'
import GenericCard from "./components/GenericCard/GenericCard";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import { borderRadius } from "@mui/system";

function App() {

  const personalProjects = [{ img_url: "http://placekitten.com/200/300", alt_text: "cat", title: "Fishing Recorder", body: "Plot where you catch fish on a map!", technologies: ["React", ".NET Core"] }];

  return (
    <div className="App">
      <div className="divider-primary">
        <div className="profile-container">
          <p><img className="profile-img" src={profile_img} alt="picture_of_tony"></img></p>
          <div>
            <h1>Hey There!👋, I'm Tony.</h1>
            <h2>Fullstack Software Engineer</h2>
          </div>
          <div className="social-icons">
            <a href="https://github.com/tonysulfaro" rel="noreferrer noopener" target="_blank">
              <AiFillGithub size="3em" />
            </a>
            <a href="https://www.linkedin.com/in/anthonysulfaro/" rel="noreferrer noopener" target="_blank">
              <AiFillLinkedin size="3em" />
            </a>
            <a href="https://twitter.com/tonysulfaro" rel="noreferrer noopener" target="_blank">
              <AiOutlineTwitter size="3em" />
            </a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1e1e7e"
          fill-opacity="1"
          d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,112C672,117,768,203,864,250.7C960,299,1056,309,1152,309.3C1248,309,1344,299,1392,293.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <section>
        <h2>About Me</h2>
        <p>I am an engineer and avid outdoorsman. When I'm not writing code you'll often find me on the golf course or on a body of water fishing!</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skill-icons">
          <div className="skill-icon">
            <p><DiPython size="3em" /></p>
            <p>Python</p>
          </div>
          <div className="skill-icon">
            <p><SiCplusplus size="3em" /></p>
            <p>C++</p>
          </div>
          <div className="skill-icon">
            <p><SiCsharp size="3em" /></p>
            <p>C#</p>
          </div>
          <div className="skill-icon">
            <p><AiFillHtml5 size="3em" /></p>
            <p>HTML</p>
          </div>
          <div className="skill-icon">
            <p><DiSass size="3em" /></p>
            <p>SASS</p>
          </div>
          <div className="skill-icon">
            <p><FaAngular size="3em" /></p>
            <p>Angular</p>
          </div>
          <div className="skill-icon">
            <p><DiReact size="3em" /></p>
            <p>React</p>
          </div>
          <div className="skill-icon">
            <p><AiOutlineConsoleSql size="3em" /></p>
            <p>SQL</p>
          </div>
        </div>
      </section>

      <section id="personal-projects">
        <h2>Personal Projects</h2>
        <div className="card-container">
          {personalProjects.map((project) => (
            <GenericCard img_url={project.img_url} alt_text={project.alt_text} title={project.title} body={project.body} technologies={project.technologies} />
          ))}
        </div>
      </section>

      <section id="professional-experience">
        <h2>Recent Professional Experience</h2>
        <ExperienceTimeline></ExperienceTimeline>
      </section>

      <section id="hobbies">
        <h2>Some of my Hobbies</h2>
      </section>

      <section id="tunes">
        <h2>What I've Been Listening to Lately</h2>
        <div className="tune-container">

          <div className="song">
            <iframe title="la lune" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/1UCDE2UIE5cC6B1o0nsrSv?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>

          <div className="song">
            <iframe title="gecgecgec" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/7vaFuClNKe02pjKYbXEJ46?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>

          <div className="song">
            <iframe title="some other song" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/5Dvd2vfqvPg0RCXQ9DpKee?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>

          <div className="song">
            <iframe title="another song" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/0832wOXVvKQoLp3TI1iQEV?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>

        </div>
      </section >

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1e1e7e" fill-opacity="1" d="M0,288L30,250.7C60,213,120,139,180,128C240,117,300,171,360,202.7C420,235,480,245,540,218.7C600,192,660,128,720,122.7C780,117,840,171,900,160C960,149,1020,75,1080,69.3C1140,64,1200,128,1260,144C1320,160,1380,128,1410,112L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
        </path>
      </svg>

      <footer>
        <h2>Links</h2>
        <p><a>Source</a></p>
      </footer>
    </div >
  );
}

export default App;
