import "./App.scss";
import profile_img from "./assets/profile.jpg"

function App() {
  return (
    <div className="App">
      <div className="nav">
        <p>About</p>
        <p>Personal Projects</p>
        <p>Something</p>
        <p>Social Links</p>
      </div>
      <div className="divider-primary">
        <div className="profile-container">
          <p><img className="profile-img" src={profile_img}></img></p>
          <div>
            <h1>Tony Sulfaro</h1>
            <p>Some about section</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3535ac"
          fill-opacity="1"
          d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,112C672,117,768,203,864,250.7C960,299,1056,309,1152,309.3C1248,309,1344,299,1392,293.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <section id="personal-projects">
        <h2>Personal Projects</h2>
      </section>

      <section id="github-projects">
        <h2>Current GitHub Projects</h2>
      </section>

      <section id="links">
        <h2>Social Links</h2>
      </section>

      <footer>
        <h2>TITLE</h2>
        <p>About Text</p>
      </footer>
    </div>
  );
}

export default App;
