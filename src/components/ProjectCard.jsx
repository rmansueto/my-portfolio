export default function ProjectCard({ title, description, link, tag, image }) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      {tag && <span className="project-tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}
