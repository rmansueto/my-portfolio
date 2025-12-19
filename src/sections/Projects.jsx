import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <ProjectCard title="FureverStay" description="A dedicated airbnb platform for pet owners and their furry friends." />
                <ProjectCard title="Project 2" description="Description of Project 2" />
                <ProjectCard title="Project 3" description="Description of Project 3" />
            </div>
        </section>
    );
}