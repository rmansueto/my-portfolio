import ProjectCard from "../components/ProjectCard";
import fureverstayImg from "../assets/projects/fureverstay.jpg";
import wildescapeImg from "../assets/projects/wildescape.jpg";
import powerbiImg from "../assets/projects/powerbi-dashboard.jpg";
import excelImg from "../assets/projects/excel-dashboard.jpg";
import digilearnLogo from "../assets/projects/digilearn-logo.jpg";
import fiestaPoster from "../assets/projects/fiesta-poster.jpg";
export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-section">
                <h3>Web Development</h3>
                <div className="project-list">
                    <ProjectCard
                        title="FureverStay"
                        description="A dedicated airbnb platform for pet owners and their furry friends."
                        tag="Django"
                        link="https://github.com/rmansueto/FureverStay"
                        image={fureverstayImg}
                    />
                    <ProjectCard
                        title="WildEscape"
                        description="is a web application designed to help users search, compare, 
                        and book hotels and accommodations worldwide."
                        tag="React / Vite"
                        link="https://github.com/rmansueto/WildEscape"
                        image={wildescapeImg}
                    />
                </div>
            </div>
            {/* Excel/Data/Analysis */}
            <div className="project-section">
                <h3>Data & Analytics</h3>
                <div className="project-list">
                    <ProjectCard
                        title="Coffee Sales Dashboard"
                        description="Power BI dashboard analyzing monthly sales and trends."
                        tag="Power BI"
                        image={powerbiImg}
                    />
                    <ProjectCard
                        title="Coffee Sales Dashboard (Excel)"
                        description="Excel Dashboard using charts, formulas and pivot tables."
                        tag="Excel"
                        image={excelImg}
                    />
                </div>
            </div>
            {/* GRAPHIC DESIGN */}
            <div className="project-section">
                <h3>Graphic Design</h3>
                <div className="project-list">
                    <ProjectCard
                        title="DigiLearn Interactive Logo"
                        description="DigiLearn Interactive Logo for education purposes."
                        tag="Logo Design"
                        image={digilearnLogo}
                    />
                    <ProjectCard
                        title="Fiesta Poster Design"
                        description="Poster design for a local fiesta event."
                        tag="Poster Design"
                        image={fiestaPoster}
                    />
                </div>
            </div>
            <div className="project-section">
                <h3>Video Projects</h3>
                <ProjectCard
                    title="Hanako AI Horror Shorts"
                    description="Short-form AI horror videos created for YouTube Shorts."
                    tag="Video Editing"
                    youtube="https://www.youtube.com/shorts/CMNY3xHS2ik"
                />
                <ProjectCard
                    title="Sleep Paralysis AI Horror Shorts"
                    description="Short-form AI horror videos created for YouTube Shorts."
                    tag="Video Editing"
                    youtube="https://www.youtube.com/shorts/9DPs7rS8mpo"
                />
            </div>
        </section>
    );
}