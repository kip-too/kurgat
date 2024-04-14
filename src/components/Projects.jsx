import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="far fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                {project.gitHubLink && (
                                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                                        <button className="link-button">Code</button>
                                    </a>
                                )}
                                {project.playstoreLink && (
                                    <a href={decodeURIComponent(project.playstoreLink)} target="_blank" rel="noopener noreferrer">
                                        <button className="link-button">Live</button>
                                    </a>
                                )}
                                {project.googleDrive && (
                                    <a href={decodeURIComponent(project.googleDrive)} target="_blank" rel="noopener noreferrer">
                                        <button className="link-button">Live</button>
                                    </a>
                                )}
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

