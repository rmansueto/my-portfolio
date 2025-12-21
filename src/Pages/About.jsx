import profileImg from "../assets/profile.jpg";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="about-left">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about-right">
          <h1>About Me</h1>
          <h2>Ritter Padin</h2>
          <h3>Web Developer</h3>
          <p>
            I am a passionate web developer with experience in building dynamic
            web applications. My journey in tech started with a curiosity for
            understanding how websites work, and it has evolved into a full-fledged
            career.
          </p>
          <p>
            I enjoy working with modern technologies and frameworks, and I am
            constantly seeking to learn and grow in this ever-changing field.
          </p>
        </div>
      </section>
      {/* Tech Stacks */}
      <section className="skills">
        <h2>Tech Stacks</h2>
        <div className="skills-list">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>CSS</span>
          <span>HTML</span>
          <span>SQL</span>
          <span>MySQL</span>
          <span>Java</span>
          <span>Python</span>
          <span>Django</span>
          <span>Supabase</span>
        </div>
      </section>
      {/* Tools */}
      <section className="skills tools">
        <h2>Tools</h2>
        <div className="skills-list">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Figma</span>
          <span>Chrome DevTools</span>
          <span>Postman</span>
          <span>Jira</span>
          <span>MS Office</span>
          <span>Power BI</span>
          <span>Google Sheets</span>
        </div>
      </section>
    </>
  );
}