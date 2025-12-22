import { useState } from "react";

export default function ProjectCard({ title, description, link, tag, image }) {
    const [open, setOpen] = useState(false);
  return (
    <>
      <div className="project-card" onClick={() => setOpen(true)}>
            {image && (
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            )}
            {tag && <span className="project-tag">{tag}</span>}
            <h3>{title}</h3>
            <p>{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                View Project
                </a>
            )}
        </div>
        {open && (
            <div className="modal-overlay" onClick={() => setOpen(false)}>
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                    className="modal-close"
                    onClick={() => setOpen(false)}
                    >
                    ✕
                    </button>

                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                </div>
            </div>
        )}
    </>
  );
}
