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
          {/*<h3></h3>*/}
          <p>
            I am a passionate person who loves the use of technology to solve
            problems and create innovative solutions.
          </p>
          <p>
            I enjoy working with modern technologies and frameworks, and I am
            constantly seeking to learn and grow in this ever-changing field.
          </p>
        </div>
      </section>
      <section className="timeline">
        <div className="timeline-left">
          <h2>Education</h2>
          <div className="timeline-item">
            <h3>Bachelor of Science in Information Technology</h3>
            <h4>2nd Year</h4>
            <p>Cebu Institute of Technology - University</p>
            <h3>Senior High School - STEM Strand</h3>
            <h4>2019 - 2020</h4>
            <p>University of Cebu Main-Campus</p>
          </div>
        </div>
        <div className="timeline-right">
          <h2>Experience</h2>
          <div className="timeline-item">
            <h3>Payment Processing Analyst</h3>
            <h4>June 2023 - Feb 2025</h4>
            <p>Interactech Solutions Inc.</p>
            <h5>Responsibilities:</h5>
            <ul>
              <li>Analyzed and provided insights on fraud transactions.</li>
              <li>Processed transactions accurately and efficiently.</li>
              <li>Prepared detailed financial reports and documentation.</li>
            </ul>
            <h3>Settlement Officer</h3>
            <h4>March 2025 - Oct 2025</h4>
            <p>PearlPay Inc.</p>
            <h5>Responsibilities:</h5>
            <ul>
              <li>Managed and settled dispute transactions.</li>
              <li>Prepared basic reports for reviewing transaction records.</li>
            </ul>
          </div>
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
          <span>Canva</span>
        </div>
      </section>
    </>
  );
}