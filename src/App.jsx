import './App.css'

function App() {
  return(



<>
<header>
<h1>Mike Dev</h1>
<nav>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</nav>
</header>
<main>
<section className="hero">

<section>
    <img src="/images/img11.jpeg" className="profileImage" alt="profile image"/>
</section>

<h2>Hello, I'm dev Mike</h2>
<p>I build responsive and dynamic websites and mobile Apps using 
    JavaScript, React, React Native, FastAPI and MYSQL.</p>
<a className="button" href="#projects">View My Projects</a>
</section>

<section id="about">
<h2>About Me</h2>
<p>I love solving problems and I believe that with technology, 
    we tackle real world problems and make the world a better place</p>
</section>
<section id="skills">
    <h2>My Skills</h2>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>Javascript</li>
<li>React</li>
<li>FastAPI</li>
</ul>
</section>
<section id="projects">
<h2>My Projects</h2>
<div className="project-card">
<h3>Shop Calculator</h3>
<p>A simple calculator for product cost, selling price and profit.</p>
</div>
<div className="project-card">
<h3>Student List</h3>
<p>A webpage that displays students from a JavaScript array.</p>
</div>
</section>
<section id="contact">
<h2>Contact Me</h2>


  <form className="contact-form" id="myForm">
    
    <input type="text" id="name" placeholder="Your Name" required />
    <input type="email" id="email" placeholder="Your Email" required />
    <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
    <button className="submitBtn" type="submit">Send Message</button>
    <p id="status"></p>
  </form>

<p className="email">Email: mikeisexuberant@gmail.com</p>
</section>
</main>
<footer>
<p>&copy; 2026 Dev Mike</p>
</footer>

</>
)
}
export default App