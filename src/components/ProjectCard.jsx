import { useState } from "react";

export default function ProjectCard({ title, description, link, tag, image, video, youtube }) {
  const [open, setOpen] = useState(false);

  const getYouTubeEmbed = (url) => {
    if (!url) return null;
    const id = url.includes("shorts/")
      ? url.split("shorts/")[1].split("?")[0]
      : url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  };

  return (
    <>
      <div className="project-card" onClick={() => setOpen(true)}>
        {image && (
          <div className="project-image">
            <img src={image} alt={title} />
          </div>
        )}

        {video && (
          <div className="project-video-thumb">
            <video src={video} muted loop autoPlay />
          </div>
        )}

        {youtube && (
          <div className="project-video-thumb">
            <img
              src={`https://img.youtube.com/vi/${youtube.split("shorts/")[1]}/hqdefault.jpg`}
              alt="YouTube Thumbnail"
            />
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>
              ✕
            </button>

            {youtube ? (
              <iframe
                width="100%"
                height="400"
                src={getYouTubeEmbed(youtube)}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : video ? (
              <video src={video} controls autoPlay />
            ) : (
              <img src={image} alt={title} />
            )}

            <h3>{title}</h3>
          </div>
        </div>
      )}
    </>
  );
}
